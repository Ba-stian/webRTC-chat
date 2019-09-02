const express = require('express');

const app = express();

const server = require('http').createServer(app);
const path = require('path');

const publicPath = path.join(__dirname, './public');
const port = process.env.PORT || 8000;
const io = require('socket.io').listen(server);

const data = {
	rooms: [],
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
	socket.on('SEND_ROOMS_LIST', () => {
		io.emit('SEND_ROOMS_LIST', data.rooms);
	});
	socket.on('ROOM_ADDED', (room) => {
		socket.join(room);
		data.rooms.push(room);
		data.messages[room] = [];
		console.log('ROOM_ADDED', room);
		io.emit('ROOM_CREATED', room);
		console.log(data.rooms)
		io.of(`/${room}`)
			.on('connection', () => {
				socket.on('MESSAGE_SENDED', (message, user) => {
					console.log('MESSAGE_SENDED', message, user);
					io.emit('MESSAGE_ACCEPTED', message, user);
				});
			});
	});
	socket.on('MESSAGE_SENDED', (message, user, room) => {
		data.messages[room].push({ message, user });
		console.log('MESSAGE_SENDED', message, user);
		io.emit('MESSAGE_ACCEPTED', message, user, room);
	});
	socket.on('REQUEST_ROOMS', () => {
		io.emit('SEND_ROOMS', data.rooms);
		console.log('SEND_ROOMS', data.rooms);
	});
	socket.on('REQUEST_ROOM_MESSAGES', (room) => {
		console.log('REQUEST_ROOM_MESSAGES', room)
		io.emit('SEND_ROOM_MESSAGES', data.messages[room]);
		console.log('SEND_ROOM_MESSAGES', data.messages[room]);
	});
	socket.on('USER_LOGOUT', (user) => {
		io.emit('USER_LOGOUT', user);
		console.log('USER_LOGOUT', user);
	});
});


server.listen(port, () => {
	console.log(`Server has started on port ${port}...`);
});
