const hero = document.querySelector('.hero'),
  text = hero.querySelector('h1'),
  walk = 100; //100px

function shadow(e) {
  let {offsetWidth: width, offsetHeight: height} = hero,
    {offsetX: x, offsetY: y} = e;

  // if the element has children, it will offset x and y values to 0,0 at the top left corner
  // below we are changing the x, y values to not reset to 0
  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  const xWalk = Math.round((x/width * walk) - (walk /2)),
    yWalk = Math.round((y/height * walk) - (walk/2));

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0, 255, 255, 0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0, 255, 0, 0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0, 0, 255, 0.7)
  `;
}

hero.addEventListener('mousemove', shadow);
