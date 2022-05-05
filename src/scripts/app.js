//javascript des 3 caroussels

var btnGauche = document.querySelectorAll(".vignette__fleche__gauche img");
var btnDroite = document.querySelectorAll(".vignette__fleche__droite img");
var slides = document.querySelector(".slides");
var imgs0 = document.querySelectorAll(".slide");
var imgs1 = document.querySelectorAll(".caroussel1__picture");
var imgs2 = document.querySelectorAll(".caroussel2__picture");
var imgs3 = document.querySelectorAll(".caroussel3__picture");
var imgIndex = 0;
var imgWidth = 26;
var imgWidth0 = 100;

btnDroite[0].addEventListener("click", function () {
  if (imgIndex < imgs0.length - 1) {
    imgIndex += 1;
    imgs0[0].style.marginLeft = -1 * imgWidth0 * imgIndex + "vw";
    slides.style.animation = "none";
  } else {
    imgIndex = 0;
    imgs0[0].style.marginLeft = -1 * imgWidth0 * imgIndex + "vw";
  }
});

btnGauche[0].addEventListener("click", function () {
  if (imgIndex > imgs0.length - 1) {
    imgIndex -= 1;
    imgs0[0].style.marginLeft = -1 * imgWidth0 * imgIndex + "vw";
    slides.style.animation = "none";
  } else {
    imgIndex = 0;
    imgs0[0].style.marginLeft = -1 * imgWidth0 * imgIndex + "vw";
  }
});

btnDroite[1].addEventListener("click", function () {
  if (imgIndex < imgs1.length - 4) {
    imgIndex += 1;
    console.log(imgIndex);
    imgs1[0].style.marginLeft = -1 * imgWidth * imgIndex + "vw";
  } else {
    imgIndex = 0;
    imgs1[0].style.marginLeft = -1 * imgWidth * imgIndex + "vw";
  }
});

btnGauche[1].addEventListener("click", function () {
  if (imgIndex > imgs1.length - 4) {
    imgIndex -= 1;
    imgs1[0].style.marginLeft = -1 * imgWidth * imgIndex + "vw";
  } else {
    imgIndex = 0;
    imgs1[0].style.marginLeft = -1 * imgWidth * imgIndex + "vw";
  }
});

btnDroite[2].addEventListener("click", function () {
  if (imgIndex < imgs2.length - 4) {
    imgIndex += 1;
    imgs2[0].style.marginLeft = -1 * imgWidth * imgIndex + "vw";
  } else {
    imgIndex = 0;
    imgs2[0].style.marginLeft = -1 * imgWidth * imgIndex + "vw";
  }
});

btnGauche[2].addEventListener("click", function () {
  if (imgIndex > imgs2.length - 4) {
    imgIndex -= 1;
    imgs2[0].style.marginLeft = -1 * imgWidth * imgIndex + "vw";
  } else {
    imgIndex = 0;
    imgs2[0].style.marginLeft = -1 * imgWidth * imgIndex + "vw";
  }
});

btnDroite[3].addEventListener("click", function () {
  if (imgIndex < imgs3.length - 4) {
    imgIndex += 1;
    imgs3[0].style.marginLeft = -1 * imgWidth * imgIndex + "vw";
  } else {
    imgIndex = 0;
    imgs3[0].style.marginLeft = -1 * imgWidth * imgIndex + "vw";
  }
});

btnGauche[3].addEventListener("click", function () {
  if (imgIndex > imgs3.length - 4) {
    imgIndex -= 1;
    imgs3[0].style.marginLeft = -1 * imgWidth * imgIndex + "vw";
  } else {
    imgIndex = 0;
    imgs3[0].style.marginLeft = -1 * imgWidth * imgIndex + "vw";
  }
});

// javascript du buger menu
const burger = document.querySelector(".nav__burger");
const nav = document.querySelector("nav");
const navLinks = document.querySelector(".nav__menuDeroulant");
const navLink = document.querySelectorAll(".menuDeroulant__link");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  navLinks.classList.toggle("active");
  navLink.forEach((a) => a.classList.toggle("active"));
});

//javascript du slide A la une
// var srcSlide = document.querySelectorAll(".taille-slide");
// var Slide = document.querySelectorAll(".slide");

// function backgroundBlur() {
//   for (let i = 0; i < srcSlide.length; i++) {
//     console.log("je change");
//     Slide[i].style.backgroundImage = "srcSlide[i].src";
//   }
// }

// backgroundBlur();
