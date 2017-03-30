const secondHand = document.querySelector(".second-hand"),
  minuteHand = document.querySelector(".min-hand"),
  hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date(),
    seconds = now.getSeconds(),
    secondsDegrees = ((seconds / 60) * 360) + 90, // Add 90 cause we offset it by 90deg in css
    minutes = now.getMinutes(),
    minutesDegrees = ((minutes / 60) * 360) + 90,
    hour = now.getHours(),
    hourDegrees = ((hour/12) * 360) + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
