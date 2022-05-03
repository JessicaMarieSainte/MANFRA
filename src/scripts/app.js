//javascript des 3 caroussels

var btnGauche = document.querySelectorAll(".vignette__fleche__gauche img");
var btnDroite = document.querySelectorAll(".vignette__fleche__droite img");
var imgs1 = document.querySelectorAll(".caroussel1__picture");
var imgs2 = document.querySelectorAll(".caroussel2__picture");
var imgs3 = document.querySelectorAll(".caroussel3__picture");
var imgIndex = 0;
var imgWidth = 100;

for (let i = 0; i < btnGauche.length; i++) {
  btnDroite[0].addEventListener("click", function () {
    if (imgIndex < imgs1.length - 4) {
      imgIndex += 1;
      imgs1[0].style.marginLeft = -1 * imgWidth * imgIndex + "px";
    } else {
      imgIndex = 0;
      imgs1[0].style.marginLeft = -1 * imgWidth * imgIndex + "px";
    }
  });

  btnGauche[0].addEventListener("click", function () {
    if (imgIndex > imgs1.length - 4) {
      imgIndex -= 1;
      imgs1[0].style.marginLeft = -1 * imgWidth * imgIndex + "px";
    } else {
      imgIndex = 0;
      imgs1[0].style.marginLeft = -1 * imgWidth * imgIndex + "px";
    }
  });

  btnDroite[1].addEventListener("click", function () {
    if (imgIndex < imgs2.length - 4) {
      imgIndex += 1;
      imgs2[0].style.marginLeft = -1 * imgWidth * imgIndex + "px";
    } else {
      imgIndex = 0;
      imgs2[0].style.marginLeft = -1 * imgWidth * imgIndex + "px";
    }
  });

  btnGauche[1].addEventListener("click", function () {
    if (imgIndex > imgs2.length - 4) {
      imgIndex -= 1;
      imgs2[0].style.marginLeft = -1 * imgWidth * imgIndex + "px";
    } else {
      imgIndex = 0;
      imgs2[0].style.marginLeft = -1 * imgWidth * imgIndex + "px";
    }
  });

  btnDroite[2].addEventListener("click", function () {
    if (imgIndex < imgs3.length - 4) {
      imgIndex += 1;
      imgs3[0].style.marginLeft = -1 * imgWidth * imgIndex + "px";
    } else {
      imgIndex = 0;
      imgs3[0].style.marginLeft = -1 * imgWidth * imgIndex + "px";
    }
  });

  btnGauche[2].addEventListener("click", function () {
    if (imgIndex > imgs3.length - 4) {
      imgIndex -= 1;
      imgs3[0].style.marginLeft = -1 * imgWidth * imgIndex + "px";
    } else {
      imgIndex = 0;
      imgs3[0].style.marginLeft = -1 * imgWidth * imgIndex + "px";
    }
  });
}

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
