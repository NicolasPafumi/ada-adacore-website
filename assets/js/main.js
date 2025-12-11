document.addEventListener("DOMContentLoaded", function() {

  ///////////////////////////////////////////////
  // 1) Scroll-triggered reveal for stack images
  ///////////////////////////////////////////////
  const stackImages = document.querySelectorAll('.stack-img');

  const stackObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        stackObserver.unobserve(entry.target); // each image triggers only once
      }
    });
  }, {
    threshold: 0.3
  });

  stackImages.forEach(img => stackObserver.observe(img));


  ////////////////////////////////////////////////
  // 2) Simple fade-in elements on scroll
  ////////////////////////////////////////////////
  const scrollImages = document.querySelectorAll('.scroll-fade');

  function revealScrollImages() {
    const triggerBottom = window.innerHeight * 0.9;

    scrollImages.forEach(img => {
      const rect = img.getBoundingClientRect();
      if (rect.top < triggerBottom) {
        img.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealScrollImages);
  revealScrollImages();


  ///////////////////////////////////////////////
  // 3) Reveal the overlapping stack section on scroll
  ///////////////////////////////////////////////
  const stackSection = document.querySelector('.scroll-reveal');

  function revealStackSection() {
    if (!stackSection) return;
    const rect = stackSection.getBoundingClientRect();
    const triggerBottom = window.innerHeight * 0.85;

    if (rect.top < triggerBottom) {
      stackSection.classList.add('visible');
      window.removeEventListener('scroll', revealStackSection);
    }
  }

  window.addEventListener('scroll', revealStackSection);
  revealStackSection();


  ///////////////////////////////////////////////
  // 4) Scroll-triggered reveal for slideshow images
  ///////////////////////////////////////////////
  const slideshowImages = document.querySelectorAll(".slideshow-image");

  const slideshowObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        slideshowObserver.unobserve(entry.target); // trigger once
      }
    });
  }, {
    threshold: 0.3
  });

  slideshowImages.forEach(img => slideshowObserver.observe(img));

});
