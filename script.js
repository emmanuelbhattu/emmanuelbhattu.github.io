// ===== Smooth Scrolling =====
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ===== Active Link Highlighting =====
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + window.innerHeight / 2;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    const id = section.getAttribute('id');
    const link = document.querySelector(`nav ul li a[href="#${id}"]`);

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// ===== Sticky Header Shadow =====
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.5)';
  } else {
    header.style.boxShadow = '0 2px 6px rgba(0,0,0,0.5)';
  }
});
