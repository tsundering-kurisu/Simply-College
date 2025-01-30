const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Function to scroll to the top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Show or hide the button based on scroll position
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) { // Show the button when scrolled down 100px
    scrollToTopBtn.style.display = "block";
  } else { // Hide the button when near the top
    scrollToTopBtn.style.display = "none";
  }
});