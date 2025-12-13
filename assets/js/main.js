document.addEventListener("DOMContentLoaded", () => {

  ///////////////////////////////////////////////
  // Articles on top of each others
  ///////////////////////////////////////////////

  
  const stackImages = document.querySelectorAll('.stack-img');

  function revealStackOnScroll() {
    const scrollY = window.scrollY;
    const windowH = window.innerHeight;

    stackImages.forEach((img, i) => {
      const triggerPoint = i * windowH * 0.2 + 0.8 * windowH; // adjust distance between reveals
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
  
  /*
  const stackImages = document.querySelectorAll('.stack-img');

  function revealStackOnScroll() {
    const windowBottom = window.scrollY + window.innerHeight;

    stackImages.forEach((img, i) => {
      const imgTop = img.offsetTop + img.parentElement.offsetTop; // relative to document

      // reveal if in view and not yet visible
      if (windowBottom > imgTop + 50 && !img.classList.contains('visible')) {
        // optional staggered delay for cinematic effect
        setTimeout(() => {
          img.classList.add('visible');
        }, i * 100); // 100ms between images
      }
    });
  }

  window.addEventListener('scroll', revealStackOnScroll);
  window.addEventListener('resize', revealStackOnScroll);
  revealStackOnScroll(); // initial check in case some images are visible on load
  */

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
    const currentScroll = window.scrollY;

    if (currentScroll > lastScrollY && currentScroll > 120) {
      ribbon.classList.add("hidden");   // scrolling down
    } else {
      ribbon.classList.remove("hidden"); // scrolling up
    }

    lastScrollY = currentScroll;
  });


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

/*
document.addEventListener("scroll", () => {
  const ribbon = document.querySelector(".top-ribbon");
  const sections = document.querySelectorAll(".section");

  let isDark = false;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();

    // Check if section is under the ribbon area
    if (rect.top <= 60 && rect.bottom > 60) { // THE TWO NUMBER MUST BE THE SIZE OF THE RIBBON
      if (section.classList.contains("black")) {
        isDark = true;
      }
    }
  });

  ribbon.classList.toggle("dark", isDark);
  ribbon.classList.toggle("light", !isDark);
});*/


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

// Optional: resize periodically if content changes dynamically
setInterval(resizeIframe, 500);

