const holes = document.querySelectorAll('.hole'),
  scoreBoard = document.querySelector('.score'),
  moles = document.querySelectorAll('.mole');
let lastHole,
  timeup = false,
  score = 0;

function randomTime(min, max) {
  return Math.round(Math.random() * (max-min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length),
    hole = holes[idx];

  if(hole == lastHole) {
    console.log('thats the same one');
    return randomHole(holes);
  }

  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(200, 1000),
    hole = randomHole(holes);

  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeup) peep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  score = 0;
  timeup = false;
  peep();
  setTimeout(() => timeup = true, 10000);
}

function bonk(e) {
  if (!e.isTrusted) return; // fake click
  score++;
  this.classList.remove('up');
  scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk));
