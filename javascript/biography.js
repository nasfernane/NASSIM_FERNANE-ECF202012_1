'use strict';

// const theBadPlus = document.querySelector('.favorites--theBadPlus');
// const snarkyPuppy = document.querySelector('.favorites--snarkyPuppy');
// const tromboneShorty = document.querySelector('.favorites--tromboneShorty');
// const sonsOfKemet = document.querySelector('.favorites--sonsOfKemet');

const groupes = document.querySelectorAll('.biographySection__favorites p');

const biography = document.querySelector('.displayBiography__biography');
const picture = document.querySelector('.displayBiography__bandPicture img');
const name = document.querySelector('.displayBiography__bandPicture h3');

const switchBiography = function (event) {
    console.log(event.innerHTML);
    for (const band of favorites) {
        if (event.innerHTML === band.name) {
            biography.innerHTML = band.biography;
            picture.src = band.picture;
            picture.alt = band.name;
            name.innerHTML = band.name;
        }
    }
};

// ECOUTEURS

// theBadPlus.addEventListener('click', function (event) {
//     switchBiography(event.currentTarget);
// });

// snarkyPuppy.addEventListener('click', function (event) {
//     switchBiography(event.currentTarget);
// });

for (const groupe of groupes) {
    groupe.addEventListener('click', function (event) {
        switchBiography(event.currentTarget);
    });
}
