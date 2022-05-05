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
btnDroite[0].addEventListener("click", function() {
    if (imgIndex < imgs0.length - 1) {
        imgIndex += 1;
        imgs0[0].style.marginLeft = -1 * imgWidth0 * imgIndex + "vw";
        slides.style.animation = "none";
    } else {
        imgIndex = 0;
        imgs0[0].style.marginLeft = -1 * imgWidth0 * imgIndex + "vw";
    }
});
btnGauche[0].addEventListener("click", function() {
    if (imgIndex > imgs0.length - 1) {
        imgIndex -= 1;
        imgs0[0].style.marginLeft = -1 * imgWidth0 * imgIndex + "vw";
        slides.style.animation = "none";
    } else {
        imgIndex = 0;
        imgs0[0].style.marginLeft = -1 * imgWidth0 * imgIndex + "vw";
    }
});
btnDroite[1].addEventListener("click", function() {
    if (imgIndex < imgs1.length - 4) {
        imgIndex += 1;
        console.log(imgIndex);
        imgs1[0].style.marginLeft = -1 * imgWidth * imgIndex + "vw";
    } else {
        imgIndex = 0;
        imgs1[0].style.marginLeft = -1 * imgWidth * imgIndex + "vw";
    }
});
btnGauche[1].addEventListener("click", function() {
    if (imgIndex > imgs1.length - 4) {
        imgIndex -= 1;
        imgs1[0].style.marginLeft = -1 * imgWidth * imgIndex + "vw";
    } else {
        imgIndex = 0;
        imgs1[0].style.marginLeft = -1 * imgWidth * imgIndex + "vw";
    }
});
btnDroite[2].addEventListener("click", function() {
    if (imgIndex < imgs2.length - 4) {
        imgIndex += 1;
        imgs2[0].style.marginLeft = -1 * imgWidth * imgIndex + "vw";
    } else {
        imgIndex = 0;
        imgs2[0].style.marginLeft = -1 * imgWidth * imgIndex + "vw";
    }
});
btnGauche[2].addEventListener("click", function() {
    if (imgIndex > imgs2.length - 4) {
        imgIndex -= 1;
        imgs2[0].style.marginLeft = -1 * imgWidth * imgIndex + "vw";
    } else {
        imgIndex = 0;
        imgs2[0].style.marginLeft = -1 * imgWidth * imgIndex + "vw";
    }
});
btnDroite[3].addEventListener("click", function() {
    if (imgIndex < imgs3.length - 4) {
        imgIndex += 1;
        imgs3[0].style.marginLeft = -1 * imgWidth * imgIndex + "vw";
    } else {
        imgIndex = 0;
        imgs3[0].style.marginLeft = -1 * imgWidth * imgIndex + "vw";
    }
});
btnGauche[3].addEventListener("click", function() {
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
burger.addEventListener("click", ()=>{
    nav.classList.toggle("active");
    navLinks.classList.toggle("active");
    navLink.forEach((a)=>a.classList.toggle("active")
    );
});
//js du fetch "les plus populaires"
var imgsScore = document.querySelectorAll(".caroussel1__picture img.caroussel__picture__img");
let mangaPopular = function() {
    fetch("https://api.jikan.moe/v4/manga?limit=8&order_by=score&sort=desc").then(function(response) {
        return response.json();
    }).then(function(manga) {
        for(let i = 0; i < imgsScore.length; i++){
            imgsScore[i].src = "";
            imgsScore[i].src = manga.data[i].images.webp.image_url;
        }
    });
};
mangaPopular();
//js du fetch pour les mangas recommandés
var imgsRecommendation = document.querySelectorAll(".caroussel3__picture img.caroussel__picture__img");
let mangaRecommendation = function() {
    fetch("https://api.jikan.moe/v4/recommendations/manga?&limit=8").then(function(response) {
        return response.json();
    }).then(function(manga) {
        for(let i = 0; i < imgsScore.length; i++){
            imgsRecommendation[i].src = "";
            imgsRecommendation[i].src = manga.data[i].entry[0].images.webp.image_url;
        }
    });
};
mangaRecommendation(); //js de la page search

//# sourceMappingURL=index.c719088e.js.map
