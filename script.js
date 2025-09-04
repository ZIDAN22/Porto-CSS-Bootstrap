document.addEventListener('DOMContentLoaded', function () {
  // Toggle Dark Mode
  const toggleBtn = document.getElementById('toggle-bright');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('bright-mode');
    });
  }

  // Hamburger menu
  // const b = document.querySelector('nav ul');
  // const hamburger = document.querySelector('.navbar-toggler');
  // hamburger.addEventListener('click', () => {
  //     b.classList.toggle('show');
  //   });
  

  // Job title effect
  const roles = [" - UI/UX Design", " - Back End Developer", " - Wordpres Developer"];
  let index = 0;
  const jobTitle = document.getElementById("job-title");
  function changeRole() {
    if (jobTitle) {
      jobTitle.textContent = roles[index];
      index = (index + 1) % roles.length;
    }
  }
  setInterval(changeRole, 4000);

  // Scroll reveal untuk semua elemen utama
  const revealElements = document.querySelectorAll(
    '.custom-card, .section-title, .about-card, .certificate-card, .about-img, #hero-image, .footer-section'
  );
  function revealOnScroll() {
    revealElements.forEach(el => {
      const gulir = el.getBoundingClientRect();
      if (gulir.top < window.innerHeight - 50) {
        el.classList.add('show');
      }
    });
  }
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  // About Section Show More/Less
  const aboutMoreBtn = document.getElementById('about-more-btn');
  const aboutMore = document.getElementById('about-more');
  if (aboutMoreBtn && aboutMore) {
    aboutMoreBtn.addEventListener('click', function () {
      if (aboutMore.style.display === "none") {
        aboutMore.style.display = "block";
        aboutMoreBtn.textContent = "Tampilkan Lebih Sedikit";
      } else {
        aboutMore.style.display = "none";
        aboutMoreBtn.textContent = "Tampilkan Lebih Banyak";
      }
    });
  }
});


