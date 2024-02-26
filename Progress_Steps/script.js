const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;
next.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    update()
})

prev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }
    update()
})

/**
 * Updates the progress bar and enables/disables the prev/next buttons based on the current active slide index.
 */
function update() {
  /**
   * Loops through all circles and adds/removes the 'active' class based on the current active slide index.
   * @param {Element} circle - The circle element.
   * @param {number} i - The index of the circle.
   */
  circles.forEach((circle, i) => {
    if (i < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  /**
   * Gets all active circle elements and calculates the progress bar width.
   * @type {NodeList}
   */
  const actives = document.querySelectorAll('.active');
  progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}