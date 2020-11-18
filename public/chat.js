const output = document.querySelector('.output-message');
const message = document.querySelector('.message');
const send = document.querySelector('.send');
const feedback = document.querySelector('.feedback');

//Socket server URL
const socket = io.connect('http://localhost:3000');

//Fetch URL Params from URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const username = urlParams.get('username');
const roomname = urlParams.get('roomname');
console.log(username, roomname);

//Emitting username and roomname of newly joined user to server
socket.emit('joined-user', {
    username: username,
    roomname: roomname,
    peerid: peerid
})

//Sending data when user clicks send
send.addEventListener('click', () =>{
    console.log(message.value)
    socket.emit('chat', {
        username: username,
        message: message.value,
        roomname: roomname
    })
    message.value = '';
})

//Sending username if the user is typing
message.addEventListener('keypress', () => {
    socket.emit('typing', {username: username, roomname: roomname})
})

//Displaying if new user has joined the room
socket.on('joined-user', (data)=>{
    output.innerHTML += '<p>--> <strong><em>' + data.username + ' </strong>has Joined the Room</em></p>';
    peer.on('call', function(call) {
        call.answer(mediaStream)
    })
})

//Displaying the message sent from user
socket.on('chat', (data) => {
    output.innerHTML += '<p><strong>' + data.username + '</strong>: ' + data.message + '</p>';
    feedback.innerHTML = '';
    document.querySelector('.chat-container').scrollTop = document.querySelector('.chat-container').scrollHeight

})

//Displaying if a user is typing
socket.on('typing', (user) => {
    feedback.innerHTML = '<p><em>' + user + ' is typing...</em></p>';
})