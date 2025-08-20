// Toggle Dark Mode
const toggleBtn = document.getElementById('toggle-bright');
toggleBtn.addEventListener('click', () => {document.body.classList.toggle('bright-mode');});



const b  = document.querySelector('nav ul');
const hamburger = document.querySelector('.navbar-toggler'); // Select the navbar toggler button
hamburger.addEventListener('click', () => {b.classList.toggle('show')})

const roles = [" - UI/UX Design", " - Back End Developer", " - Wordpres Developer"];
let index = 0;
const jobTitle = document.getElementById("job-title");

function changeRole() {
  jobTitle.textContent = roles[index];
  index = (index + 1) % roles.length; // looping
}

setInterval(changeRole, 4000);

// Scroll reveal
const revealElements = document.querySelectorAll('.card-item, .headtitle');

function revealOnScroll() {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('show');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // jalankan pertama kali

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


