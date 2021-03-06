var express = require("express");
var moment = require('moment');
var app = express();
var PORT = process.env.PORT || 2000;
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'))

io.on('connection', function (socket) {
    console.log('User connected by the help of socket.io...');

    socket.on('message', function (message) {
        console.log('Message received : ' + message.text);

        message.timestamp = moment().valueOf();

        // socket.broadcast.emit('message', message);
        io.emit('message', message);
    });

    socket.emit('message', {
        text: 'Welcome to the chat room...',
        timestamp: moment().valueOf()
    });
});

http.listen(PORT, function () {
    console.log("Server started on port : " + PORT);
  });
  