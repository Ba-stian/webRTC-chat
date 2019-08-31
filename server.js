const express = require('express');

const app = express();

const server = require('http').createServer(app);
const path = require('path');

const publicPath = path.join(__dirname, './build');
const port = process.env.PORT || 8000;
const io = require('socket.io').listen(server);


app.use(express.static(publicPath));


io.on('connection', (socket) => {
	console.log('new connection');
	socket.on('USER_CONNECTED', (user) => {
		io.emit('USER_CONNECTED');
		console.log('USER_CONNECTED', user);
	});
	socket.on('USER_LOGOUT', () => {
		io.emit('USER_LOGOUT');
		console.log('USER_LOGOUT');
	});
	socket.on('MESSAGE_SENDED', (message, user) => {
		console.log('MESSAGE_SENDED', message, user);
		io.emit('MESSAGE_ACCEPTED', message, user);
	});
	socket.on('ROOM_ADDED', (room) => {
		socket.join(room);
		console.log('ROOM_ADDED', room);
		io.emit('ROOM_CREATED', room);
	});
});


server.listen(port, () => {
	console.log(`Server has started on port ${port}...`);
});
