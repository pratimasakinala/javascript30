const msg = new SpeechSynthesisUtterance(),
  voicesDropdown = document.querySelector('[name="voice"]'),
  options = document.querySelectorAll('[type="range"], [name="text"]'),
  speakButton = document.querySelector('#speak'),
  stopButton = document.querySelector('#stop');

let voices = [];

msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
  voices = this.getVoices();

  voicesDropdown.innerHTML = voices
    .filter(voice => voice.lang.includes('en'))
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
}

function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value);
  toggle();
}

function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) speechSynthesis.speak(msg);
}

function setOption() {
  msg[this.name] = this.value;
  toggle();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption));
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));
