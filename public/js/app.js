var socket = io();

socket.on('connect', function () {
    console.log('Connected to socket.io server...');
});

socket.on('message', function (message) {
    console.log('Message : ');
    console.log(message.text);
});