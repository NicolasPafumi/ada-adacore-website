document.addEventListener("DOMContentLoaded", () => {

  ///////////////////////////////////////////////
  // Articles on top of each others
  ///////////////////////////////////////////////

  
  const stackImages = document.querySelectorAll('.stack-img');

  function revealStackOnScroll() {
    const scrollY = window.scrollY;
    const windowH = window.innerHeight;

    stackImages.forEach((img, i) => {
      const triggerPoint = i * windowH * 0.1 + 0.4 * windowH; // adjust distance between reveals
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
  // five elements from left to right
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
const sections = document.querySelectorAll('.section.black, .section.newspaper');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    document.body.classList.remove('bg-black', 'bg-news');

    if (entry.target.classList.contains('black')) {
      document.body.classList.add('bg-black');
    }

    if (entry.target.classList.contains('newspaper')) {
      document.body.classList.add('bg-news');
    }
  });
}, {
  threshold: 0.4
});

sections.forEach(section => observer.observe(section));



////////////////////////////////////////////////////////////
// Make top ribbon change color
//////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  const ribbon = document.querySelector(".top-ribbon");
  const links = document.querySelectorAll(".ribbon-content a");
  const sections = document.querySelectorAll(".section");
  const underline = document.querySelector(".ribbon-underline");

  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {

    /* start ribbon hidden scroll down */
    /*
    const currentScroll = window.scrollY;

    if (currentScroll > lastScrollY && currentScroll > 120) {
      ribbon.classList.add("hidden");   // scrolling down
    } else {
      ribbon.classList.remove("hidden"); // scrolling up
    }

    lastScrollY = currentScroll;
    */
    /* end ribbon hidden scroll down */

    updateProgress(); // for progress bar


  });

  

  /* start progress bar */
  const progressFill = document.querySelector(".progress-fill");

  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const progress = (scrollTop / docHeight) * 100;
    progressFill.style.width = `${progress}%`;
  }
 /* end progress bar */


  function updateRibbon() {
    let currentSection = null;
    let darkMode = false;

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();

      if (rect.top <= 80 && rect.bottom > 80) {
        currentSection = section.id;
        darkMode = section.classList.contains("black");
      }
    });

    // Theme fade
    ribbon.classList.toggle("dark", darkMode);

    // Active link + underline
    links.forEach(link => {
      const isActive = link.dataset.section === currentSection;
      link.classList.toggle("active", isActive);

      if (isActive) {
        const rect = link.getBoundingClientRect();
        const parentRect = link.parentElement.getBoundingClientRect();

        underline.style.width = `${rect.width}px`;
        underline.style.transform =
          `translateX(${rect.left - parentRect.left}px)`;
      }
    });
  }

  window.addEventListener("scroll", updateRibbon);
  window.addEventListener("resize", updateRibbon);
  updateRibbon();
});


///////////////////////////////////////////////////////////////
// adapt size of nasdaq question graph
/////////////////////////////////////////////////////////////
function resizeIframe() {
  const iframe = document.getElementById('nasdaq-iframe');
  if (iframe && iframe.contentWindow) {
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight * 1.1 + 'px';
  }
}

// Resize once after load
document.getElementById('nasdaq-iframe').addEventListener('load', resizeIframe);

// resize periodically if content changes dynamically
setInterval(resizeIframe, 500);

