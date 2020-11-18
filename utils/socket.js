//Socket connection
function socket(io) {
    io.on('connection', (socket) => {
        socket.on('joined-user', (data) =>{
            //Joining the Socket Room
            socket.join(data.roomname);
    
            //Emitting New Username to Clients
            io.to(data.roomname).emit('joined-user', {username: data.username, peerid: data.peerid});
        })
    
        //Emitting messages to Clients
        socket.on('chat', (data) =>{
            io.to(data.roomname).emit('chat', {username: data.username, message: data.message});
        })
    
        //Broadcasting the user who is typing
        socket.on('typing', (data) => {
            socket.broadcast.to(data.roomname).emit('typing', data.username)
        })
    })
}

module.exports = socket;