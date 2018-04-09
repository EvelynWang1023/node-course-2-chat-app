var socket = io();
            
socket.on('connect', function(){ 
    console.log('Connected to server.');

    socket.emit('createMessage', {
        from: 'Andrew',
        text: 'Hey, this is Andrew'
    });
});

socket.on('disconnect', function() {  
    console.log('Disconnected to server');
});

socket.on('newMessage', function(message) {
    console.log('newMessage', message);
});