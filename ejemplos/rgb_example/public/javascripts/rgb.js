var socket = io.connect('http://localhost:3000');

$('#change_color').on('change', function(e){
  socket.emit('setColor', $('#change_color').val());

  e.preventDefault();
});
