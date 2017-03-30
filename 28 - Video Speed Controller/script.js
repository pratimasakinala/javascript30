const video = document.querySelector('.flex'),
  speed = document.querySelector('.speed'),
  bar = document.querySelector('.speed-bar');

function handleMove(e) {
  const y = e.pageY - this.offsetTop,
    percent = y / this.offsetHeight,
    min = 0.4,
    max = 4,
    height = Math.round(percent * 100) + '%',
    playbackRate = percent * (max - min) + min;

  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(2) + 'x';

  video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', handleMove);
