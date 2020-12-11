// script pour revenir à la page d'accueil quand on clique n'importe où sur le header

const header = document.querySelector('.header');

header.addEventListener('click', () => {
    document.location.href = 'index.html';
});
