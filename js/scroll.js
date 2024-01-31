// Go-to-Top Button
const topBtn = document.querySelector("#top-btn");

let bodyScrollTopPosition = document.body.scrollTop;

window.onscroll = function () {
  if (bodyScrollTopPosition > 150 || document.documentElement.scrollTop > 150) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

// Scroll Effect of the Divs
let screenPosition = window.innerHeight / 1.3;

function sectionTwoScrolled() {
  sectionTwoDiv = document.querySelector(".section-two");
  sectionTwoPosition = sectionTwoDiv.getBoundingClientRect().top;

  if (sectionTwoPosition < screenPosition) {
    sectionTwoDiv.classList.add("section-two-scrolled");
  } else if (sectionTwoPosition > screenPosition) {
    sectionTwoDiv.classList.remove("section-two-scrolled");
  }
}

function sectionThreeScrolled() {
  sectionThreeDiv = document.querySelector(".section-three");
  sectionThreePosition = sectionThreeDiv.getBoundingClientRect().top;

  if (sectionThreePosition < screenPosition) {
    sectionThreeDiv.classList.add("section-three-scrolled");
  } else if (sectionThreePosition > screenPosition) {
    sectionThreeDiv.classList.remove("section-three-scrolled");
  }
}

function sectionFourScrolled() {
  sectionFourDiv = document.querySelector(".section-four");
  sectionFourPosition = sectionFourDiv.getBoundingClientRect().top;

  if (sectionFourPosition < screenPosition) {
    sectionFourDiv.classList.add("section-four-scrolled");
  } else if (sectionFourPosition > screenPosition) {
    sectionFourDiv.classList.remove("section-four-scrolled");
  }
}

function sectionFiveScrolled() {
  sectionFiveDiv = document.querySelector(".section-five");
  sectionFivePosition = sectionFiveDiv.getBoundingClientRect().top;

  if (sectionFivePosition < screenPosition) {
    sectionFiveDiv.classList.add("section-five-scrolled");
  } else if (sectionFivePosition > screenPosition) {
    sectionFiveDiv.classList.remove("section-five-scrolled");
  }
}

function footerScrolled() {
  footerDiv = document.querySelector(".footer");
  footerPosition = footerDiv.getBoundingClientRect().top;

  if (footerPosition < screenPosition) {
    footerDiv.classList.add("footer-scrolled");
  } else if (footerPosition > screenPosition) {
    footerDiv.classList.remove("footer-scrolled");
  }
}

window.addEventListener("scroll", sectionTwoScrolled);
window.addEventListener("scroll", sectionThreeScrolled);
window.addEventListener("scroll", sectionFourScrolled);
window.addEventListener("scroll", sectionFiveScrolled);
window.addEventListener("scroll", footerScrolled);
