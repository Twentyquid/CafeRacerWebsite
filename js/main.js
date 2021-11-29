const toggle = document.querySelector(".toggle-btn");
const navLinks = document.querySelector(".nav-list");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
