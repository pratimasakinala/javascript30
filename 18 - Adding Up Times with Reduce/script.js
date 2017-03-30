const timeNodes = Array.from(document.querySelectorAll('[data-time]')),
  seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
      const [mins, secs] = timeCode.split(':').map(parseFloat);

      return (mins * 60) + secs;
    })
    .reduce((total, vidseconds) => total + vidseconds);

let secondsLeft = seconds;
const hrs = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hrs, mins, secondsLeft);
