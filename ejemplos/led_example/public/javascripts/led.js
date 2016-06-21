$(document).ready(function() {
  var socket = io.connect('http://localhost:3000');
  $('#red').click(function(e){
    socket.emit('red');
    e.preventDefault();
  });

  $('#yellow').click(function(e){
    socket.emit('yellow');
    e.preventDefault();
  });

  $('#green').click(function(e){
    socket.emit('green');
    e.preventDefault();
  });
});
