document.addEventListener("DOMContentLoaded", function () {
    const themeBtn = document.getElementById("themeBtn");
    const navToggle = document.getElementById("nav-toggle");
    const navLinks = document.querySelector(".nav-links");
    const scrollTopBtn = document.getElementById("scrollTop");
  
    // Apply stored theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") document.body.classList.add("dark-theme");
  
    // Theme toggle
    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        localStorage.setItem(
          "theme",
          document.body.classList.contains("dark-theme") ? "dark" : "light"
        );
      });
    }
  
    // Toggle menu for mobile
    if (navToggle && navLinks) {
      navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show-menu");
      });
    }
  
    // Scroll to top button
    if (scrollTopBtn) {
      window.addEventListener("scroll", () => {
        scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
      });
  
      scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  });
  
    // Toggle navigation menu
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});