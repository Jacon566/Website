const hamburgerElement = document.getElementById("hamburger");
const navElemente = document.getElementsByClassName("navelemente")[0];

hamburgerElement.addEventListener("click", () => {
  hamburgerElement.classList.toggle("active");
  navElemente.classList.toggle("active");
});
