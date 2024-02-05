const searchBtn = document.querySelector(".search-box button");

searchBtn.addEventListener("click", () => {
  searchBtn.previousElementSibling.classList.toggle("show");
  searchBtn.classList.toggle("active");
});

const hamBtn = document.querySelector(".hamburger");
const crossBtn = document.querySelector(".cross-icon");

hamBtn.addEventListener("click", () => {
  document.querySelector(".header-links").classList.add("show");
  document.querySelector('body').style.height = '100vh'
  document.querySelector('body').style.overflow = 'hidden'
});

crossBtn.addEventListener("click", () => {
  document.querySelector(".header-links").classList.remove("show");
  document.querySelector('body').style.height = 'auto'
  document.querySelector('body').style.overflow = 'auto'
});
