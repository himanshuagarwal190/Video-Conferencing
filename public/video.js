var divVideo = document.querySelector('.video')
var endCall = document.querySelector('.end-call')
var constraints = {audio: true, video: {width: 250, height: 250}}

function getMedia(constraints) {
    var video = document.createElement('video')
    navigator.mediaDevices.getUserMedia(constraints)
    .then(stream => {
        video.srcObject = stream
        console.log(video.srcObject)
        video.onloadedmetadata = function(e) {
            video.play();
          };
        divVideo.appendChild(video)
    }).catch (err => {
        console.log(err)
    })
}

getMedia(constraints)

endCall.addEventListener('click', () => {
    location.href = '/'
})