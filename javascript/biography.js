'use strict';

// récupération des éléments
//groupes favoris
const groupes = document.querySelectorAll('.biographySection__favorites p');
// encadré biographie
const biography = document.querySelector('.displayBiography__biography');
// image du groupe favori
const picture = document.querySelector('.displayBiography__bandPicture img');
// nom du groupe
const name = document.querySelector('.displayBiography__bandPicture h3');

// fonction pour changer les infos de l'encadré biographie selon le nom sur lequel on clique
const switchBiography = function (event) {
    //boucle sur le json des groupes favoris
    for (const band of favorites) {
        // si le nom de l'itération en cours correspond au nom de la cible du clic, on change les infos de l'encadré Biographie
        if (event.innerHTML === band.name) {
            biography.innerHTML = band.biography;
            picture.src = band.picture;
            picture.alt = band.name;
            name.innerHTML = band.name;
        }
    }
};

// crée un écouteur pour chaque groupe du tableau groupes dans favorites.js
for (const groupe of groupes) {
    groupe.addEventListener('click', function (event) {
        // lance le changement de biographie en lui donnant les infos sur la cible du clic
        switchBiography(event.currentTarget);
    });
}
