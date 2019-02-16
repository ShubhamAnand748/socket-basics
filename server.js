var express = require("express");
var app = express();
var PORT = process.env.PORT || 2000;
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'))

io.on('connection', function () {
    console.log('User connected by the help of socket.io...');
});

http.listen(PORT, function () {
    console.log("Server started on port : " + PORT);
  });
  