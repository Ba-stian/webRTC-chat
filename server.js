const express = require('express');

const app = express();

const server = require('http').createServer(app);
const path = require('path');

const publicPath = path.join(__dirname, './public');
const port = process.env.PORT || 8000;
const io = require('socket.io').listen(server);

const data = {
	rooms: ['main'],
	messages: {
		main: [],
	},
};


app.use(express.static(publicPath));


io.on('connection', (socket) => {
	console.log('new connection');
	socket.on('USER_CONNECTED', (user) => {
		console.log('USER_CONNECTED', user);
	});
	socket.on('MESSAGE_SENDED', (message, user, room) => {
		data.messages[room].push({ message, user });
		console.log('MESSAGE_SENDED', message, user);
		io.emit('MESSAGE_ACCEPTED', message, user, room);
	});
	socket.on('USER_LOGOUT', (user) => {
		io.emit('USER_LOGOUT', user);
		console.log('USER_LOGOUT', user);
	});
	// socket.on('MESSAGE_SENDED', (message, user) => {
	// 	console.log('MESSAGE_SENDED', message, user);
	// 	io.emit('MESSAGE_ACCEPTED', message, user);
	// });
	socket.on('ROOM_ADDED', (room) => {
		socket.join(room);
		data.rooms.push(room);
		data.messages[room] = [];
		console.log('ROOM_ADDED', room, socket.rooms);
		io.emit('ROOM_CREATED', room);
		io.of(`/${room}`)
			.on('connection', () => {
				socket.on('MESSAGE_SENDED', (message, user) => {
					console.log('MESSAGE_SENDED', message, user);
					io.emit('MESSAGE_ACCEPTED', message, user);
				});
			});
	});
	socket.on('REQUEST_ROOMS', () => {
		io.emit('SEND_ROOMS', data.rooms);
	});
	socket.on('REQUEST_ROOM_MESSAGES', (room) => {
		io.emit('SEND_ROOM_MESSAGES', data.messages[room]);
	});
});


server.listen(port, () => {
	console.log(`Server has started on port ${port}...`);
});
