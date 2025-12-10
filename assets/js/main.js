document.addEventListener("DOMContentLoaded", function() {

  //////////////////////////////
  // 1) Slideshow (overlapping)
  //////////////////////////////
  const overlapImages = document.querySelectorAll('.stack-img');
  let overlapIndex = 0;

  function showNextOverlapImage() {
    overlapImages.forEach(img => img.classList.remove('active'));
    overlapImages[overlapIndex].classList.add('active');
    overlapIndex = (overlapIndex + 1) % overlapImages.length;
  }

  if (overlapImages.length > 0) {
    showNextOverlapImage();
    setInterval(showNextOverlapImage, 3000);
  }

  ////////////////////////////////////////////////
  // 2) Simple fade-in elements on scroll
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
  revealImages();


  ///////////////////////////////////////////////
  // 3) Reveal the overlapping stack on scroll
  ///////////////////////////////////////////////
  const stack = document.querySelector('.scroll-reveal');

  function revealStack() {
    if (!stack) return;
    const rect = stack.getBoundingClientRect();
    const triggerBottom = window.innerHeight * 0.85;

    if (rect.top < triggerBottom) {
      stack.classList.add('visible');
      window.removeEventListener('scroll', revealStack);
    }
  }

  window.addEventListener('scroll', revealStack);
  revealStack();


  ///////////////////////////////////////////////
  // 4) NEW: Scroll-triggered slideshow-image reveals
  ///////////////////////////////////////////////
  const slideshowImages = document.querySelectorAll(".slideshow-image");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // trigger once
      }
    });
  }, {
    threshold: 0.3
  });

  slideshowImages.forEach(img => observer.observe(img));

});
