let lastScrollTop = 0; // Tracks the last scroll position
const navBar1 = document.getElementById('nav-bar-1');
const navBar2 = document.getElementById('nav-bar-2');

window.addEventListener('scroll', () => {
  const currentScrollTop = window.scrollY;

  if (currentScrollTop > lastScrollTop) {
    // Scrolling down
    navBar1.style.transform = 'translateY(-100%)'; // Smoothly hide nav-bar-1
    navBar2.style.top = '0'; // Smoothly move nav-bar-2 up
  } else {
    // Scrolling up
    navBar1.style.transform = 'translateY(0)'; // Smoothly show nav-bar-1
    navBar2.style.top = '70px'; // Smoothly move nav-bar-2 down
  }

  lastScrollTop = currentScrollTop;
});



document.getElementById('search-college').addEventListener('focus', function() {
  document.getElementById('searchbar-svg').classList.add('focused');
});

document.getElementById('search-college').addEventListener('blur', function() {
  document.getElementById('searchbar-svg').classList.remove('focused');
});