const videoContainers = document.querySelectorAll('.video-player');

videoContainers.forEach(videoContainer => {
  const video = videoContainer.querySelector('video');
  const playBtn = videoContainer.querySelector('.play-btn');
  const pauseBtn = videoContainer.querySelector('.pause-btn');
  const rewindBtn = videoContainer.querySelector('.rewind-btn');
  const fastForwardBtn = videoContainer.querySelector('.fast-forward-btn');
  const progressBar = videoContainer.querySelector('.progress');
  const progressBarContainer = videoContainer.querySelector('.progress-bar');
  const fullscreenBtn = videoContainer.querySelector('.fullscreen-btn');

  playBtn.addEventListener('click', () => {
    video.play();
  });

  pauseBtn.addEventListener('click', () => {
    video.pause();
  });

  rewindBtn.addEventListener('click', () => {
    video.currentTime -= 10;
  });

  fastForwardBtn.addEventListener('click', () => {
    video.currentTime += 10;
  });

  video.addEventListener('timeupdate', () => {
    const progressPercent = (video.currentTime / video.duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
  });

  progressBarContainer.addEventListener('click', (event) => {
    const progressWidth = progressBarContainer.clientWidth;
    const clickX = event.offsetX;
    const duration = video.duration;
    video.currentTime = (clickX / progressWidth) * duration;
  });

  fullscreenBtn.addEventListener('click', () => {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  });
});