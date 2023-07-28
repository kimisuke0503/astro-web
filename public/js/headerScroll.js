const header = document.querySelector(".header-wrap");
const cover = document.querySelector(".cover");
const coverHeight = cover.offsetHeight;

window.addEventListener("scroll", function () {
  if (window.scrollY > coverHeight - 100 ) {
    header.classList.add("header--white");
  } else {
    header.classList.remove("header--white");
  }
});
