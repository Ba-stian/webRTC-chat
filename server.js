const express = require('express');

const app = express();

const server = require('http').createServer(app);
const path = require('path');

const publicPath = path.join(__dirname, './build');
const port = process.env.PORT || 8000;
const io = require('socket.io').listen(server);


app.use(express.static(publicPath));

io.on('connection', () => {
	console.log('new user connected');
});


server.listen(port, () => {
	console.log(`Server has started on port ${port}...`);
});
