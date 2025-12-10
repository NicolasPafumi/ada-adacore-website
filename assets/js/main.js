//////////////////////////////
// images overlapping
//////////////////////////////
document.addEventListener("DOMContentLoaded", function() {

  // IMAGES OVERLAPPING
  const images = document.querySelectorAll('.stack-img');
  let index = 0;

  function showNextImage() {
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');
    index = (index + 1) % images.length;
  }

  if (images.length > 0) {
    showNextImage();
    setInterval(showNextImage, 3000);
  }

  ////////////////////////////////////////////////
  // To make multiple image appear on the same line
  ////////////////////////////////////////////////
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
