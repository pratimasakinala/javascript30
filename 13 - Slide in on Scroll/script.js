function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;

    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const imgs = document.querySelectorAll('.slide-in');

function checkSlide(e) {
  imgs.forEach(img => {
    // halfway throught the img
    const slideInAt = (window.scrollY + window.innerHeight) - img.height / 2,
      imgBottom = img.offsetTop + img.height; // bottom of the img

    const isHalfShown = slideInAt > img.offsetTop,
      isNotScrolledPast = window.scrollY < imgBottom;

    if (isHalfShown && isNotScrolledPast) img.classList.add('active');
    else img.classList.remove('active');
  });
}

window.addEventListener('scroll', debounce(checkSlide));
