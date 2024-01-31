// NAVIGATION BAR
const navBar = document.querySelector(".navbar");
const resBar = document.querySelector(".resbar");
const navBarMenuBtn = document.querySelector(".navbar-menu");
const resBarMenuBtn = document.querySelector(".resbar-menu");

navBarMenuBtn.addEventListener("click", function () {
  resBar.style.animation = "resbarAppear 1s 1 forwards";
});

resBarMenuBtn.addEventListener("click", function () {
  resBar.style.animation = "resbarDisappear 1s 1 forwards";
});

// HIDDEN PART
const shownPart = document.querySelector(".sect2-container");
const hiddenPart = document.querySelector(".sect2-hidden");
const moreBtn = document.querySelector(".sect2-btn1");
const lessBtn = document.querySelector(".sect2-btn2");
const goToLiveProjectCard = document.getElementById("go-to-liveprojects-card");
const goToCaseStudyCard = document.getElementById("go-to-caseStudy-card");
const goToDesignCard = document.getElementById("go-to-design-card");

moreBtn.addEventListener("click", function () {
  hiddenPart.style.display = "block";
  shownPart.style.display = "none";
  moreBtn.style.display = "none";
  lessBtn.style.display = "flex";
});
lessBtn.addEventListener("click", function () {
  hiddenPart.style.display = "none";
  shownPart.style.display = "grid";
  moreBtn.style.display = "flex";
  lessBtn.style.display = "none";
});
goToLiveProjectCard.addEventListener("click", function () {
  hiddenPart.style.display = "block";
  shownPart.style.display = "none";
  moreBtn.style.display = "none";
  lessBtn.style.display = "flex";
});
goToCaseStudyCard.addEventListener("click", function () {
  hiddenPart.style.display = "block";
  shownPart.style.display = "none";
  lessBtn.style.display = "flex";
  moreBtn.style.display = "none";
});
goToDesignCard.addEventListener("click", function () {
  hiddenPart.style.display = "block";
  shownPart.style.display = "none";
  lessBtn.style.display = "flex";
  moreBtn.style.display = "none";
});

// SLIDER ONE
let slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlides1(n) {
  showSlides1((slideIndex1 += n));
}

function currentSlide1(n) {
  showSlides1((slideIndex1 = n));
}

function showSlides1(n) {
  let i;
  let slides1 = document.getElementsByClassName("sect2-myslides1");
  if (n > slides1.length) {
    slideIndex1 = 1;
  }
  if (n < 1) {
    slideIndex1 = slides1.length;
  }
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  slides1[slideIndex1 - 1].style.display = "block";
}

const leftArrow1 = document.querySelector(".icon-arrowLeft1");
const rightArrow1 = document.querySelector(".icon-arrowRight1");
rightArrow1.addEventListener("click", function () {
  plusSlides1(1);
});
leftArrow1.addEventListener("click", function () {
  plusSlides1(-1);
});

// SLIDER TWO
let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2((slideIndex2 += n));
}

function currentSlide2(n) {
  showSlides2((slideIndex2 = n));
}

function showSlides2(n) {
  let i;
  let slides2 = document.getElementsByClassName("sect2-myslides2");
  if (n > slides2.length) {
    slideIndex2 = 1;
  }
  if (n < 1) {
    slideIndex2 = slides2.length;
  }
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  slides2[slideIndex2 - 1].style.display = "block";
}

const leftArrow2 = document.querySelector(".icon-arrowLeft2");
const rightArrow2 = document.querySelector(".icon-arrowRight2");
rightArrow2.addEventListener("click", function () {
  plusSlides2(1);
});
leftArrow2.addEventListener("click", function () {
  plusSlides2(-1);
});

// SLIDER THREE
let slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(n) {
  showSlides3((slideIndex3 += n));
}

function currentSlide3(n) {
  showSlides3((slideIndex3 = n));
}

function showSlides3(n) {
  let i;
  let slides3 = document.getElementsByClassName("sect2-myslides3");
  if (n > slides3.length) {
    slideIndex3 = 1;
  }
  if (n < 1) {
    slideIndex3 = slides3.length;
  }
  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";
  }
  slides3[slideIndex3 - 1].style.display = "block";
}

const leftArrow3 = document.querySelector(".icon-arrowLeft3");
const rightArrow3 = document.querySelector(".icon-arrowRight3");
rightArrow3.addEventListener("click", function () {
  plusSlides3(1);
});
leftArrow3.addEventListener("click", function () {
  plusSlides3(-1);
});

// TESTIMONIALS
// Silder Four
let slideIndex4 = 1;
showSlides4(slideIndex4);

function plusSlides4(n) {
  showSlides4((slideIndex4 += n));
}

function currentSlide4(n) {
  showSlides4((slideIndex4 = n));
}

function showSlides4(n) {
  let i;
  let slides4 = document.getElementsByClassName("sect4-myslides");
  if (n > slides4.length) {
    slideIndex4 = 1;
  }
  if (n < 1) {
    slideIndex4 = slides4.length;
  }
  for (i = 0; i < slides4.length; i++) {
    slides4[i].style.display = "none";
  }
  slides4[slideIndex4 - 1].style.display = "block";
}

const leftArrow4 = document.querySelector(".icon-arrowLeft4");
const rightArrow4 = document.querySelector(".icon-arrowRight4");
rightArrow4.addEventListener("click", function () {
  plusSlides4(1);
});
leftArrow4.addEventListener("click", function () {
  plusSlides4(-1);
});
