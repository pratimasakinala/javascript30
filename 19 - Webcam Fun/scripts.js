const video = document.querySelector('.player'),
  canvas = document.querySelector('.photo'),
  ctx = canvas.getContext('2d'),
  strip = document.querySelector('.strip'),
  snap = document.querySelector('.snap');

function getVideo() {
  navigator.mediaDevices.getUserMedia({video: true, audio: false})
    .then(localMediaStream => {
      video.src = window.URL.createObjectURL(localMediaStream);
      video.play();
    })
    .catch(err => {
      console.error(`OH NO!!`, err);
    });
}

function paintToCanvas() {
  const width = video.videoWidth,
    height = video.videoHeight;

  canvas.width = width;
  canvas.height = height;

  setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);

    // take the pixels out
    let pixels = ctx.getImageData(0, 0, width, height);
    // mess with them
    // red effect
    // pixels = redEffect(pixels);

    // split the colors
    // pixels = rgbSplit(pixels);

    // ghosting effect below
    // ctx.globalAlpha = 0.1;

    // greenscreen effect
    pixels = greenScreen(pixels);

    // put them back
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

function takePhoto() {
  // play the clicking sound
  snap.currentTime = 0;
  snap.play();

  // take data out of the canvas
  const data = canvas.toDataURL('image/jpg'),
    link = document.createElement('a');

  link.href = data;
  link.setAttribute('download', 'handsome');
  link.innerHTML = `<img src="${data}" alt="Handsome Woman"/>`;
  strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 100; // red
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // green
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // blue
  }
  return pixels;
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i -150] = pixels.data[i + 0]; // red
    pixels.data[i + 100] = pixels.data[i + 1]; // green
    pixels.data[i - 500] = pixels.data[i + 2]; // blue
  }
  return pixels;
}

function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll('.rgb input').forEach(input => {
    levels[input.name] = input.value;
  });

  for (let i = 0; i < pixels.data.length; i += 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (red >= levels.rmin && green >= levels.gmin && blue >= levels.bmin
      && red <= levels.rmax && green <= levels.gmax && blue <= levels.bmax) {
        pixels.data[i + 3] = 0;
      }
  }
  return pixels;
}

getVideo();

video.addEventListener('canplay', paintToCanvas);
