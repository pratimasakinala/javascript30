const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

let isDrawing = false,
  lastX = 0,
  lastY = 0,
  hue = 0,
  direction = true;

// Set the canvas size to equal the window/screen size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Set a starting color
ctx.strokeStyle = '#BADA55';
// Set up the shape of line
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;

// ctx.globalCompositeOperation = 'source-out';

function draw(e){
  if (!isDrawing) return; // stop fn from running when mouse is not clicked down

  ctx.strokeStyle =`hsl(${hue}, 100%, 50%)`; // Change the color as line is drawn

  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  // Reset the position of cursor
  [lastX, lastY] = [e.offsetX, e.offsetY];

  // Change the hue for color change
  hue++;
  if (hue >= 360) hue = 0;

  // Change the direction of lineWidth
  if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) direction =! direction;

  // Change the lineWidth based on the direction
  if (direction) ctx.lineWidth++;
  else ctx.lineWidth--;
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
