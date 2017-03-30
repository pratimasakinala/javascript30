const divs = document.querySelectorAll('div');

function logText(e) {
  e.stopPropagation(); // stop bubbling up
  console.log(this.classList.value);
}

divs.forEach(div => div.addEventListener('click', logText, {
  capture: false, // if true, it makes the event to fired on the way down
  once: true // unbind itself so that there is no future clicks on it
}));

// If you wanted to have a button that can only be cliked once (eg Checkout)
const button = document.querySelector('button');
button.addEventListener('click', () => {
  console.log('Click!!!');
}, {
  once: true
});
