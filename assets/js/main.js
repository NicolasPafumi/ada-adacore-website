
// To make multiple image appear on the same line
<script>
  document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('.scroll-fade');

  function revealImages() {
    const triggerBottom = window.innerHeight * 0.9;

    images.forEach(img => {
      const rect = img.getBoundingClientRect();
      if (rect.top < triggerBottom) {
        img.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealImages);
  revealImages(); // initial check
  });
  </script>
