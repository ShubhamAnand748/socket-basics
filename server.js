var express = require("express");
var app = express();
var PORT = process.env.PORT || 2000;
var http = require('http').Server(app);

app.use(express.static(__dirname + '/public'))

http.listen(PORT, function () {
    console.log("Server started on port : " + PORT);
  });
  