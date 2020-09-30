// grab everything we need
const crazyButtons = document.querySelectorAll('.btn-crazy');

// define our functions
function goCrazy() {
  // get a random number for the left offset
  // random num for top offset
  const offsetHorizontal = Math.random() * (window.innerWidth - this.clientWidth);
  const offsetVertical  = Math.random() * (window.innerHeight - this.clientHeight);

  // apply those numbers to the button
  this.style.top = `${offsetVertical}px`;
  this.style.left = `${offsetHorizontal}px`;
}

// add event listeners
crazyButtons.forEach(button => button.addEventListener('mouseenter', goCrazy));