let lastScrollTop = 0; // Tracks the last scroll position
const navBar1 = document.getElementById('nav-bar-1');

window.addEventListener('scroll', () => {
  const currentScrollTop = window.scrollY;

  if (currentScrollTop > lastScrollTop) {
    // Scrolling down
    navBar1.style.transform = 'translateY(-100%)'; // Smoothly hide nav-bar-1
  } else {
    // Scrolling up
    navBar1.style.transform = 'translateY(0)'; // Smoothly show nav-bar-1
  }

  lastScrollTop = currentScrollTop;
});
