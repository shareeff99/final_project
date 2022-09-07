const videoPlayer = document.querySelector('#theVideoBox');


var video = document.querySelector(".myVideo");

//custom play , pause amd timeline and skip buttons

//save buttons
var btnPlayPause = document.getElementById("play_pause");

var play_big_btn = document.getElementById("play_big_btn");

var volumeBTN = document.querySelector("#volumeIcon");

const currentTimeElement = videoPlayer.querySelector('.current');
const durationTimeElement = videoPlayer.querySelector('.duration');

const progress = videoPlayer.querySelector('.video-progress');
const progressBar = videoPlayer.querySelector('.video-progress-filled');

// play pause function
function togglePlayPause() {
  if (video.paused) {
    btnPlayPause.className = "pause";
    play_big_btn.style.opacity = "0";
    video.play();
  } else {
    btnPlayPause.className = "play";
    play_big_btn.style.opacity = "1";
    video.pause();
  }
}

btnPlayPause.onclick = function () {
  togglePlayPause();
};



// mute volume btn
volumeBTN.addEventListener("click", ()=> {
  video.muted = !video.muted;
  volumeBTN.classList.toggle("mute")
})


/*
function toggleVolumeIcon() {
  if (volumeBTN.className= "unMute") {
    volumeBTN.className= "mute";
  } 
  else {
    volumeBTN.className= "unMute";
  }
};

volumeBTN.onclick = function () {
  toggleVolumeIcon();
};
*/




// volume
volume.addEventListener("mousemove", (e) => {
  video.volume = e.target.value;
});



//current time and duration
const currentTime = () => {
  let currentMinutes = Math.floor(video.currentTime / 60)
  let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60)
  let durationMinutes = Math.floor(video.duration / 60)
  let durationSeconds = Math.floor(video.duration - durationMinutes * 60)

  currentTimeElement.innerHTML = `${currentMinutes}:${currentSeconds < 10 ? '0'+currentSeconds : currentSeconds}`
  durationTimeElement.innerHTML = `${durationMinutes}:${durationSeconds}`
}

video.addEventListener('timeupdate', currentTime);



//Progress bar
video.addEventListener('timeupdate', () =>{
  const percentage = (video.currentTime / video.duration) * 100
  progressBar.style.width = `${percentage}%`
})



//change progress bar on click
progress.addEventListener('click', (e) =>{
  const progressTime = (e.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = progressTime
});




// resize video
var resizeBtn = document.getElementById("resize");

resizeBtn.onclick = function () {
  if (resizeBtn.className == "increase") {
    resizeBtn.classList.add("reduce");
    resizeBtn.classList.remove("increase");
  } else {
    resizeBtn.classList.add("increase");
    resizeBtn.classList.remove("reduce");
  }
};

resizeBtn.onclick = function () {
  if (video.requestFullscreen) {
    video.requestFullscreen();
    resizeBtn.classList.add("increase");
    resizeBtn.classList.remove("reduce");
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    video.webkitRequestFullscreen();
    resizeBtn.classList.add("increase");
    resizeBtn.classList.remove("reduce");
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
    resizeBtn.classList.add("increase");
    resizeBtn.classList.remove("reduce");
  }
};

video.onclick = function () {
  if (video.paused) {
    btnPlayPause.className = "pause";
    play_big_btn.style.opacity = "0";
    video.play();
  } else {
    btnPlayPause.className = "play";
    play_big_btn.style.opacity = "1";
    video.pause();
  }
};

play_big_btn.onclick = function () {
  if (video.paused) {
    btnPlayPause.className = "pause";
    play_big_btn.style.opacity = "0";
    video.play();
  } else {
    btnPlayPause.className = "play";
    play_big_btn.style.opacity = "1";
    video.pause();
  }
};
