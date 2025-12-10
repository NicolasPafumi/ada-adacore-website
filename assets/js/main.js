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

  ///////////////////////////////////////////////
  // Reveal the overlapping image stack on scroll
  ///////////////////////////////////////////////
const stack = document.querySelector('.scroll-reveal');

function revealStack() {
  if (!stack) return;
  const rect = stack.getBoundingClientRect();
  const triggerBottom = window.innerHeight * 0.85;

  if (rect.top < triggerBottom) {
    stack.classList.add('visible');
    window.removeEventListener('scroll', revealStack); // reveal only once
  }
}

window.addEventListener('scroll', revealStack);
revealStack();

}); 

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".slideshow-image");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // each image triggers only once
      }
    });
  }, {
    threshold: 0.3 // triggers when 30% of image is in view
  });

  images.forEach(img => observer.observe(img));
});

