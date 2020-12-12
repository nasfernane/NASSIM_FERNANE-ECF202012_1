*Première évaluation en cours de formation de Nassim Fernane : Projet MyMusic App du 9 déc. 2020*


## *FONCTIONNEMENT ET DESCRIPTION DU SITE *

### Page 1 ###

La page d'accueil est constituée d'un header, d'une section de présentation en images des artistes favoris, d'une section de recherche d'un nouvel artiste et d'un footer.

Le header fait également office de landing page, avec une image background large et un effet de dégradé demandé par le client. Il comprend un logo en haut à gauche et un titre qui apparaît après un court délai, des deux côtés.

La présentation des artistes propose un assemblage de photos des artistes favoris de l'utilisateur, avec des effets de mise en relief au survol de la souris. En bas de la section, un bouton permet d'accéder à la deuxième page du site, pour une présentation plus aboutie des artistes favoris.

La section de recherche d'un nouvel artiste fait apparaître par défault trois cards qui contiennent des images et preview sonores d'un artiste situé dans les favoris de l'utilisateur. Au dessus de ces cards, il a accès à un input qui lui permet de rechercher un nouvel artiste pour afficher ses trois derniers titres, soit en cliquant sur la touche "Entrée" après sa saisie, soit au clic sur une image de Deezer. A droite, un encadré l'informe sur les autres services de streaming musicaux qui seront bientôt disponibles. 

Enfin, le footer reprend le logo du header en plus grand, cette fois-ci centré. Il surplombe des liens de navigation qui pourront à terme permettre à l'utilisateur d'accéder à d'autres sections, comme la page d'à propos, des liens annexes, une présentation des partenaires, un service de support et un formulaire de contact. 

### Page 2 ###

La deuxième page du site, axée sur les artistes favoris de l'utilisateur, reprend la même structure visuelle. 

Le header et le footer ne changent pas. En revanche, la première section propose une biographie des artistes/groupes musicaux avec la liste exhaustive des favoris de l'utilisateur. A gauche, un encadré relate cette biographie tandis qu'à droite on a une image du groupe et le nom correspondant. L'utilisateur peut à tout moment cliquer sur un autre artiste pour changer dynamiquement les informations et afficher la biographie correspondante à l'artiste choisi.

La seconde section propose une liste des concerts à venir pour ces mêmes groupes.


## *ORGANISATION DU CODE*

La convention utilisée pour le nom des images est la camelCase.
Les classes et ID sont structurées selon la méthodologie BEM (Block - Element - Modifier).

Le site est divisé en deux pages HTML : page d'accueil et pages des favoris. 

Les feuilles de style sont situées dans le dossier 'sass', lui-même divisé en plusieurs parties : 
- Le dossier 'abstract' contient tout ce qui ne génère pas de code à proprement parler, en l'occurence le stockage des variables. 
- Le dossier 'base' contient le fichier regroupant les animations, celui pour le reset global du style et celui des typographies relatif à la définition des polices et du titre principal du site web.
- Le dossier 'components' regroupe des éléments auto-suffisants.
- Le dossier 'layout' regroupe les feuilles de style des principales sections du site, par ex : header, footer, etc.

Toutes ces feuilles de style sont ensuite importées dans le fichier main.scss, lui même déployé dans le fichier style.css.
La commande terminal 'npm run scss' lancée à la racine du projet opère un script qui met à jour automatiquement le fichier CSS.

Le dossier '/img' regroupe toutes les images du site.
Le dossier '/javasript' regroupe les scripts principaux et le fichier json stockant les infos des artistes favoris.

**Lien de la maquette Figma** : https://www.figma.com/file/CciOnwXV0xB0fck6iezUpu/My-Music-App?node-id=0%3A1


## *JOURNAL DE BORD*

### Jour 1 ###
1. Analyse des documents et demandes clients 
- Définition de ce qui est indispensable et des aspects sur lequels on peut proposer des modifications
- Réflexion et définition des fonctionnalités du site et de son interface
- Préparation des ressources : choix des articles, images et biographies
- Elaboration des codes couleurs et choix des polices de caractères

2. Elaboration de la structure générale du site et outils 
- Création des fichiers HTML et principales sections de développement 
- Mise en place de SASS et fichiers de style modulaires 
- Installation des dépendances

3. Maquettage du site première partie 
- Choix et retouches du logo, déclinaison des couleurs
- Début du maquettage, page 1 et versions tablette/mobile
- Modernisation du design
 
 ### Jour 2 ###
 1. Maquettage du site deuxième partie 
 - Fin de la page 2 et déclinaisons responsive
 
 2.Début du code -
 - Stockage des couleurs en variables CSS
 - Séparation des différentes sections en layouts 
 - Approfondissement de la structure du site, mise en place des contenus
 
 3. Mise en forme 
 - Conception visuelle des principales sections de la page d'accueil
 
 4. Script -
 - Implémentation de la partie JavaScript pour la section de recherche d'un nouvel artiste, avec preview sonore des trois derniers titres
 
 ### Jour 3 ###
 1. Mise en forme, seconde partie 
 - Conception visuelle de la page des artistes favoris
 - Mises à jour mineures sur le design de la première page
 
 2. Script -
 - Ecriture d'un fichier JSON pour stocker les informations des artistes mis en favoris
 - Elaboration d'un script pour changer l'encadré des favoris dynamiquement
 - Elaboration d'un script pour revenir à la page d'accueil 

 
 
 
