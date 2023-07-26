const hamburger = document.querySelector(".hamburger-btn");
const overlay = document.querySelector(".overlay");
const subNav = document.querySelector(".sub-nav");

hamburger.addEventListener("click", () => {
  overlay.classList.toggle("on");
  subNav.classList.toggle("on");
});

overlay.addEventListener("click", () => {
  overlay.classList.toggle("on");
  subNav.classList.toggle("on");
});
