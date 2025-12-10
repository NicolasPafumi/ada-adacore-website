console.log("Found images:", document.querySelectorAll('.stack-img').length);
// IMAGES OVERLAPPING
// Fade between stacked images
const images = document.querySelectorAll('.stack-img');
let index = 0;

function showNextImage() {
  images.forEach(img => img.classList.remove('active'));
  images[index].classList.add('active');
  index = (index + 1) % images.length;
}

showNextImage();                    // show first
setInterval(showNextImage, 3000);   // change every 3 seconds



// To make multiple image appear on the same line
document.addEventListener("DOMContentLoaded", function() {
  const scrollImages = document.querySelectorAll('.scroll-fade');

  function revealImages() {
    const triggerBottom = window.innerHeight * 0.9;

    scrollImages.forEach(img => {
      const rect = img.getBoundingClientRect();
      if (rect.top < triggerBottom) {
        img.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealImages);
  revealImages(); // initial check
});
