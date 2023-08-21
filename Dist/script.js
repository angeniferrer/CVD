const toggleMenu = document.querySelector(".toggle--menu");
const headerNav = document.querySelector(".header--nav");

toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("active");
  headerNav.classList.toggle("active");
});
