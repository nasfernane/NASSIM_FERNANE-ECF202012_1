// WATCH Récupération des éléments
const albumsDiv = document.querySelector('.albums');
const searchInput = document.querySelector('.search-box__input');
const deezerBtn = document.querySelector('.search-box__deezer-button');

// FONCTIONS

// fonction qui fetch l'API deezer en fonction du nom de l'artiste entré en paramètre
const fetchAlbums = function (artiste) {
    // utilisation de la librairie jsonp pour pouvoir fetch deezer sans serveur/proxy
    fetchJsonp(
        `https://api.deezer.com/search/track/autocomplete?limit=3&q=${artiste}&output=jsonp`
    )
        .then(function (response) {
            return response.json();
        })
        .then(json => displayAlbums(json))
        .catch(function (error) {
            console.log(error);
        });
};

// fonction qui affiche les albums avec les infos récupérées de la fonction fetchAlbums
const displayAlbums = function (data) {
    // suppression de la recherche précédente
    albumsDiv.innerHTML = '';

    const albums = data.data;
    console.log(albums);
    // pour chaque album
    for (const item of albums) {
        // on crée une card bootstrap en lui injectant les données du fetch
        const html = `
        <div class="albums__card">
                <img src="${item.album.cover_big}" class="card-img-top" alt="${item.title}" />
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text"></p>
                    <audio controls src="${item.preview}"></audio>
                </div>
            </div>`;

        // puis on l'insère dans le HTML
        albumsDiv.insertAdjacentHTML('beforeend', html);
    }
};

// ECOUTEURS

// écouteurs pour le fetch deezer
searchInput.addEventListener('keydown', function (e) {
    if (searchInput.value) {
        if (e.key === 'Enter') fetchAlbums(`${searchInput.value}`);
    }
});

deezerBtn.addEventListener('click', () => {
    if (searchInput.value) fetchAlbums(`${searchInput.value}`);
});

window.addEventListener('load', () => {
    fetchAlbums('The Bad Plus');
});
