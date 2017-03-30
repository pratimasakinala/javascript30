const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

function handleCheck(e) {
  // check if they had shift key down
  // check that they are checking it
  let inBetween = false;

  if (e.shiftKey && this.checked) {
    // loop over every single checkbox
    checkboxes.forEach(checkbox => {
      // set a flag for checkboxes between the first and the last checkbox
      if (checkbox === this || checkbox === lastChecked) inBetween = !inBetween;

      // if this is inbetween then check it
      if (inBetween) checkbox.checked = true;
    });
  }
  lastChecked = this;
}
