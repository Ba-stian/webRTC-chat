const express = require('express');

const app = express();

const server = require('http').createServer(app);
const path = require('path');

const publicPath = path.join(__dirname, './public');
const port = process.env.PORT || 7000;
const io = require('socket.io').listen(server);


app.use(express.static(publicPath));


server.listen(port, () => {
	console.log(`Server has started on port ${port}...`);
});
