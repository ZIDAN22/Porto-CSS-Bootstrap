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

  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
