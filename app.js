var http = require('http');
var express = require('express');
var socket = require('socket.io');

var app = express.createServer();
var io = socket.listen(app);

app.get('/', function(request, response){
	response.sendfile(__dirname + "/index.html");
});
io.sockets.on('connection', function(client){
	console.log("Client Connected...");
	client.emit('message', {hello: 'world'});
});

app.listen(8080);
