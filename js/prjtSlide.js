// Live Projects
const liveProjectCard = document.querySelector(".liveProjectCard");
const liveImgBox = document.querySelector(".liveImgBox");
const liveImgSlide = document.querySelector(".sect2-liveImgSlide");

let liveProjectSlideIndex = 0;
liveProjectShowSlides();

function liveProjectShowSlides() {
  let i;
  let liveProjectSlides = document.getElementsByClassName("liveprojectSlides");
  for (i = 0; i < liveProjectSlides.length; i++) {
    liveProjectSlides[i].style.display = "none";
  }
  liveProjectSlideIndex++;
  if (liveProjectSlideIndex > liveProjectSlides.length) {
    liveProjectSlideIndex = 1;
  }
  liveProjectSlides[liveProjectSlideIndex - 1].style.display = "block";
}

liveProjectCard.onmouseover = function () {
  liveImgSlide.style.display = "block";
  liveImgBox.style.display = "none";
  setTimeout(liveProjectShowSlides, 2000);
};
liveProjectCard.onmouseout = function () {
  liveImgSlide.style.display = "none";
  liveImgBox.style.display = "block";
};

// Case Studies
const caseStudyCard = document.querySelector(".caseStudyCard");
const caseImgBox = document.querySelector(".caseImgBox");
const caseImgSlide = document.querySelector(".sect2-caseImgSlide");

let caseStudySlideIndex = 0;
caseStudyShowSlides();

function caseStudyShowSlides() {
  let i;
  let caseStudySlides = document.getElementsByClassName("caseStudySlides");
  for (i = 0; i < caseStudySlides.length; i++) {
    caseStudySlides[i].style.display = "none";
  }
  caseStudySlideIndex++;
  if (caseStudySlideIndex > caseStudySlides.length) {
    caseStudySlideIndex = 1;
  }
  caseStudySlides[caseStudySlideIndex - 1].style.display = "block";
}

caseStudyCard.onmouseover = function () {
  caseImgSlide.style.display = "block";
  caseImgBox.style.display = "none";
  setTimeout(caseStudyShowSlides, 2000);
};
caseStudyCard.onmouseout = function () {
  caseImgSlide.style.display = "none";
  caseImgBox.style.display = "block";
};

// UI Design
const uiDesignCard = document.querySelector(".uiDesignCard");
const designImgBox = document.querySelector(".designImgBox");
const designImgSlide = document.querySelector(".sect2-designImgSlide");

let uiDesignSlideIndex = 0;
uiDesignShowSlides();

function uiDesignShowSlides() {
  let i;
  let uiDesignSlides = document.getElementsByClassName("uiDesignSlides");
  for (i = 0; i < uiDesignSlides.length; i++) {
    uiDesignSlides[i].style.display = "none";
  }
  uiDesignSlideIndex++;
  if (uiDesignSlideIndex > uiDesignSlides.length) {
    uiDesignSlideIndex = 1;
  }
  uiDesignSlides[uiDesignSlideIndex - 1].style.display = "block";
}

uiDesignCard.onmouseover = function () {
  designImgSlide.style.display = "block";
  designImgBox.style.display = "none";
  setTimeout(uiDesignShowSlides, 2000);
};
uiDesignCard.onmouseout = function () {
  designImgSlide.style.display = "none";
  designImgBox.style.display = "block";
};

// Docket Slide
let docketSlideIndex = 0;
docketShowSlides();

function docketShowSlides() {
  let i;
  let docketSlides = document.getElementsByClassName("docketImgSlides");
  for (i = 0; i < docketSlides.length; i++) {
    docketSlides[i].style.display = "none";
  }
  docketSlideIndex++;
  if (docketSlideIndex > docketSlides.length) {
    docketSlideIndex = 1;
  }
  docketSlides[docketSlideIndex - 1].style.display = "block";
  setTimeout(docketShowSlides, 2000);
}

// Coinsack Slide
let coinsackSlideIndex = 0;
coinsackShowSlides();

function coinsackShowSlides() {
  let i;
  let coinsackSlides = document.getElementsByClassName("coinsackImgSlides");
  for (i = 0; i < coinsackSlides.length; i++) {
    coinsackSlides[i].style.display = "none";
  }
  coinsackSlideIndex++;
  if (coinsackSlideIndex > coinsackSlides.length) {
    coinsackSlideIndex = 1;
  }
  coinsackSlides[coinsackSlideIndex - 1].style.display = "block";
  setTimeout(coinsackShowSlides, 2000);
}

// Budgetpro Slide
let budgetproSlideIndex = 0;
budgetproShowSlides();

function budgetproShowSlides() {
  let i;
  let budgetproSlides = document.getElementsByClassName("budgetproImgSlides");
  for (i = 0; i < budgetproSlides.length; i++) {
    budgetproSlides[i].style.display = "none";
  }
  budgetproSlideIndex++;
  if (budgetproSlideIndex > budgetproSlides.length) {
    budgetproSlideIndex = 1;
  }
  budgetproSlides[budgetproSlideIndex - 1].style.display = "block";
  setTimeout(budgetproShowSlides, 2000);
}
