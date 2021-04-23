var video = document.getElementById("Video");

// Get the button
var btn = document.getElementById("pause-play");

// Pause and play the video, and change the button text
btn.addEventListener('click',()=>{
    console.log('video');
    if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
})
