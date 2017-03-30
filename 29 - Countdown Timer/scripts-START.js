const timerDisplay = document.querySelector('.display__time-left'),
  endTime = document.querySelector('.display__end-time'),
  buttons = document.querySelectorAll('[data-time]');
let countdown;

function timer(seconds) {
  // clear any existing timers
  clearInterval(countdown);

  const now = Date.now(),
    then = now + seconds * 1000;
  console.log({now, then});
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop it
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    // display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60),
    remainderSeconds = seconds % 60,
    hrs = Math.floor(minutes / 60),
    displayTime = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  timerDisplay.textContent = displayTime;
  document.title = displayTime;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp),
    hrs = end.getHours(),
    minutes = end.getMinutes(),
    formattedHr = hrs  > 12 ? end.getHours() - 12 : end.getHours(),
    ampm = hrs > 11 ? ' pm' : 'am';

  endTime.textContent = `Be back at ${hrs}:${minutes < 10 ? '0': ''}${minutes}${ampm}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  this.reset();
  timer(mins * 60);
});
