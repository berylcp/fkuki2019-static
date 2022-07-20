const navbarToggle = document.querySelector(".navbar__toggle input");
const navbarMobile = document.querySelector(".header__navbar--mobile");

navbarToggle.addEventListener("click", function () {
  navbarMobile.classList.toggle("show");
});
