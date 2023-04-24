// Récupération élément HTML ID "banner"
const banner = document.getElementById('banner');


// Définition des slides dans un tableau d'objets - Ajout d'images / taglines pour tester les changements dans le carrsoussel
const slides = [
  {
    "image": "slide1.jpg",
    "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
  },
  {
    "image": "slide3.jpg",
    "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
  },
  {
    "image": "slide2.jpg",
    "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
  },
  {
    "image": "slide3.jpg",
    "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
  },
  {
    "image": "slide4.png",
    "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
  },
  {
    "image": "slide3.jpg",
    "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
  }

];

// Initialisation de l'index du slide courant à 0
let currentSlideIndex = 0;


// Récupération des flèches de navigation
const leftArrow = banner.querySelector('.arrow_left');
const rightArrow = banner.querySelector('.arrow_right');



// Récupération de l'élément HTML qui contiendra les points de navigation
const dotsContainer = document.querySelector('.dots');

// Initialisation d'une chaîne de caractères pour stocker les éléments de point de navigation
let dotsHTML = '';

// Boucle pour générer un élément de point de navigation pour chaque slide
for (let i = 0; i < slides.length; i++) {
  // Ajout d'un élément de point de navigation à la chaîne de caractères avec la classe "dot"
  dotsHTML += '<span class="dot"></span>';
}

// Ajout de la chaîne de caractères contenant les éléments de point de navigation à l'élément HTML qui les contiendra
dotsContainer.innerHTML = dotsHTML;

// Récupération de tous les points de navigation créés à partir de la classe "dot"
const dot = banner.querySelectorAll('.dot');

// Boucle pour ajouter un écouteur d'événements pour chaque point de navigation
dot.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    // Mise à jour de l'index du slide courant en fonction de l'index du point de navigation cliqué
    currentSlideIndex = index;
    // On met à jour le slide affiché
    // On met à jour les points de navigation
    updateBanner();
  });
});



// Fonction pour mettre à jour le slide affiché
function updateSlide() {
  const slideImage = banner.querySelector('.banner-img');
  const slideTagLine = banner.querySelector('#banner p');

  // On met à jour l'image et la tagline du slide avec les valeurs correspondantes du tableau "slides" pour l'index du slide courant
  slideImage.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`;
  slideTagLine.innerHTML = slides[currentSlideIndex].tagLine;
}


// Fonction pour mettre à jour les points de navigation
function updateDots() {
  // On parcourt chaque point de navigation - revoir avec Lionel dot, index et modifier innerElement voir dots
  dot.forEach((dot, index) => {
    // Si l'index du point de navigation correspond à l'index du slide courant, on ajoute la classe "dot_selected" pour le mettre en surbrillance
    if (index === currentSlideIndex) {
      dot.classList.add('dot_selected');
      // Sinon, on enlève la classe "dot_selected"
    } else {
      dot.classList.remove('dot_selected');
    }
  });
}

// Fonction pour mettre à jour le slide affiché ET les points de navigation
function updateBanner() {
  updateSlide();
  updateDots();
}


// Fonction de défilement vers la gauche
function leftSlide() {
  // On décrémente l'index du slide courant pour afficher le slide précédent
  currentSlideIndex--;
  // Si on est sur le premier slide, on revient au dernier slide
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }
  // On met à jour le slide affiché ET
  // On met à jour les points de navigation
  updateBanner();
}


// Fonction de défilement vers la droite
function rightSlide() {
  // On incrémente l'index du slide courant pour afficher le slide suivant
  currentSlideIndex++;
  // Si on est sur le dernier slide, on revient au premier slide
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }
  // On met à jour le slide affiché ET
  // On met à jour les points de navigation
  updateBanner();
}


// Écouteur d'événement pour le clic sur la flèche gauche
leftArrow.addEventListener('click', leftSlide);
// Écouteur d'événement pour le clic sur la flèche droite
rightArrow.addEventListener('click', rightSlide);
// On met à jour le slide affiché ET
// On met à jour les points de navigation
updateBanner();


