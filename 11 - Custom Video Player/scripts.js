const player = document.querySelector('.player'),
  video = player.querySelector('.viewer'),
  progress = player.querySelector('.progress'),
  progressBar = player.querySelector('.progress__filled'),
  toggle = player.querySelector('.toggle'),
  skipButtons = player.querySelectorAll('[data-skip]'),
  ranges = player.querySelectorAll('.player__slider');

let isDragging = false,
  mousedown = false;

function togglePlay() {
  if (video.paused) video.play();
  else video.pause();
}

function updateButton() {
  toggle.textContent = this.paused ? '►' : '❚ ❚';
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  if (!isDragging) return;
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

video.addEventListener('click', togglePlay);

// Listeners to toggle play/pause button
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

// Listener to update the progressBar
video.addEventListener('timeupdate', handleProgress);

// Listener to toggle play/pause when clicked on the video
toggle.addEventListener('click', togglePlay);

// Listener to skip forward or backward
skipButtons.forEach(button => button.addEventListener('click', skip));

// Listeners to change the volume and speed
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousedown', () => isDragging = true));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mouseup', () => isDragging = false));
ranges.forEach(range => range.addEventListener('mouseout', () => isDragging = false));

// Listener to change the progress of the video
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
