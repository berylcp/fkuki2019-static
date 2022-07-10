const navbarToggle = document.querySelector(".navbar__toggle input");
const navbarNav = document.querySelector(".navbar .navbar__nav");

navbarToggle.addEventListener("click", function () {
  navbarNav.classList.toggle("slide");
});
