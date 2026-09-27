document.addEventListener('DOMContentLoaded', function () {
  const jobTitle = document.getElementById('job-title');
  const roles = ['AI Web Developer', 'Graphic Designer', 'Video Editor', 'WordPress Specialist'];
  let roleIndex = 0;

  if (jobTitle) {
    setInterval(function () {
      roleIndex = (roleIndex + 1) % roles.length;
      jobTitle.textContent = roles[roleIndex];
    }, 2200);
  }

  const revealElements = document.querySelectorAll('.reveal');
  const revealOnScroll = function () {
    revealElements.forEach(function (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        element.classList.add('show');
      }
    });
  };

  revealOnScroll();
  window.addEventListener('scroll', revealOnScroll, { passive: true });

  const aboutMoreBtn = document.getElementById('about-more-btn');
  const aboutMore = document.getElementById('about-more');

  if (aboutMoreBtn && aboutMore) {
    aboutMoreBtn.addEventListener('click', function () {
      const isHidden = aboutMore.hasAttribute('hidden');
      if (isHidden) {
        aboutMore.removeAttribute('hidden');
        aboutMoreBtn.textContent = 'Show less';
      } else {
        aboutMore.setAttribute('hidden', 'hidden');
        aboutMoreBtn.textContent = 'Show more';
      }
    });
  }

  document.querySelectorAll('.project-toggle').forEach(function (button) {
    button.addEventListener('click', function () {
      const card = this.closest('.project-card');
      const details = card ? card.querySelector('.project-details') : null;
      const overlay = card ? card.querySelector('.project-overlay') : null;
      if (!details || !overlay) return;

      const allCards = document.querySelectorAll('.project-card');
      allCards.forEach(function (item) {
        const itemDetails = item.querySelector('.project-details');
        const itemToggle = item.querySelector('.project-toggle');
        const itemOverlay = item.querySelector('.project-overlay');

        if (item !== card && itemDetails && itemToggle) {
          itemDetails.setAttribute('hidden', 'hidden');
          itemToggle.textContent = 'View details';
          itemToggle.setAttribute('aria-expanded', 'false');
          item.classList.remove('is-open');
          if (itemOverlay) itemOverlay.style.opacity = '1';
        }
      });

      const shouldOpen = details.hasAttribute('hidden');
      details.toggleAttribute('hidden');
      card.classList.toggle('is-open', shouldOpen);
      this.setAttribute('aria-expanded', String(shouldOpen));
      this.textContent = shouldOpen ? 'Hide details' : 'View details';
      overlay.style.opacity = shouldOpen ? '0.72' : '1';
    });
  });

  const projectCarousel = document.getElementById('projectsCarousel');
  if (projectCarousel) {
    projectCarousel.addEventListener('slid.bs.carousel', function () {
      projectCarousel.querySelectorAll('.project-card').forEach(function (card) {
        card.classList.remove('is-open');
        const toggle = card.querySelector('.project-toggle');
        const details = card.querySelector('.project-details');
        const overlay = card.querySelector('.project-overlay');
        if (toggle && details) {
          toggle.textContent = 'View details';
          toggle.setAttribute('aria-expanded', 'false');
          details.setAttribute('hidden', 'hidden');
        }
        if (overlay) {
          overlay.style.opacity = '1';
        }
      });
    });
  }

  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
