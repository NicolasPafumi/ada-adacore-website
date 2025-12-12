document.addEventListener("DOMContentLoaded", () => {

  ///////////////////////////////////////////////
  // 1) Articles on top of each others
  ///////////////////////////////////////////////
  const stackImages = document.querySelectorAll('.stack-img');

  function revealStackOnScroll() {
    const scrollY = window.scrollY;
    const windowH = window.innerHeight;

    stackImages.forEach((img, i) => {
      const triggerPoint = i * windowH * 0.2 + 0.5 * windowH; // adjust distance between reveals
      if (scrollY > triggerPoint && !img.classList.contains('visible')) {
        // staggered delay for cinematic effect
        setTimeout(() => {
          img.classList.add('visible');
        }, i * 0); // delay between images
      }
    });
  }

  window.addEventListener('scroll', revealStackOnScroll);
  revealStackOnScroll(); // initial check


  ////////////////////////////////////////////////
  // 2) five elements from left to right
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

});

///////////////////////////////////////////
// background newpaper transition to black as black section appears
//////////////////////////////////////////////
const blackSections = document.querySelectorAll('.section.black');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.body.classList.add('scrolling-to-black');
    } else {
      document.body.classList.remove('scrolling-to-black');
    }
  });
}, {
  threshold: 0.1
});

blackSections.forEach(section => observer.observe(section));
