const express = require('express');
const path = require('path');
const app = express();
const server = app.listen(8000);
const io = require('socket.io')(server);
var counter = 0;

app.use(express.static(path.join(__dirname, "./views")));

io.on('connection', function (socket) {
    console.log("Socket Connected");

  socket.on('buttonClicked', function() {
    counter++;
    io.emit('updateMessage', counter);
  });

  socket.on('resetClicked', function() {
    counter = 0;
    io.emit('updateMessage', counter);
  }); 

  socket.emit('updateMessage', counter);
});