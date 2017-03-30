const keys = document.querySelectorAll('.key');

function playAudio(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
    key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return; // No audio found

  audio.currentTime = 0; // Rewind to the start. Necessary if pressing the key multiple times should sound.
  audio.play();

  key.classList.add("playing");
}

function removeTransition(e) {
  // Remove class at the end of transition
  if (e.propertyName !== 'transform') return;
  
  this.classList.remove('playing');
}

window.addEventListener('keydown', playAudio);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
