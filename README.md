# ECF202012_1

Première évaluation en cours de formation de Nassim Fernane.


------- FONCTIONNEMENT ET DESCRIPTION DU SITE -------

La page d'accueil est constituée d'un header, d'une section de présentation en images des artistes favoris, d'une section de recherche d'un nouvel artiste et d'un footer.

Le header fait également office de landing page, avec une image background large et un effet de dégradé demandé par le client. Le logo de la marque est situé en haut à gauche, 




------- ORGANISATION DU CODE -------

Le site est divisé en deux pages HTML : page d'accueil et pages des favoris. 

Les feuilles de style sont situées dans le dossier 'sass', lui-même divisé en plusieurs parties : 
- Le dossier 'abstract' contient tout ce qui ne génère pas de code à proprement parler, en l'occurence le stockage des variables. 
- Le dossier 'base' contient le fichier regroupant les animations, celui pour le reset global du style et celui des typographies relatif à la définition des polices et du titre principal du site web.
- Le dossier 'components' regroupe des éléments auto-suffisants.
- Le dossier 'layout' regroupe les feuilles de style des principales sections du site, par ex : header, footer, etc.
Toutes ces feuilles de style sont ensuite importées dans le fichier main.scss, lui même déployé dans le fichier style.css

La commande terminal 'npm run scss' lancée à la racine du projet opère un script qui met à jour automatiquement le fichier CSS.

Le dossier '/img' regroupe toutes les images du site.
Le dossier '/javasript' regroupe les scripts principaux et le fichier json stockant les infos des artistes favoris.

Lien de la maquette Figma : https://www.figma.com/file/CciOnwXV0xB0fck6iezUpu/My-Music-App?node-id=0%3A1


------- JOURNAL DE BORD -------

### Jour 1 ###
-- Analyse des documents et demandes clients --
- Définition de ce qui est indispensable et des aspects sur lequels on peut proposer des modifications
- Réflexion et définition des fonctionnalités du site et de son interface
- Préparation des ressources : choix des articles, images et biographies
- Elaboration des codes couleurs et choix des polices de caractères

-- Elaboration de la structure générale du site et outils --
- Création des fichiers HTML et principales sections de développement 
- Mise en place de SASS et fichiers de style modulaires 
- Installation des dépendances

-- Maquettage du site première partie --
- Choix et retouches du logo, déclinaison des couleurs
- Début du maquettage, page 1 et versions tablette/mobile
- Modernisation du design
 
 ### Jour 2 ###
 -- Maquettage du site deuxième partie --
 - Fin de la page 2 et déclinaisons responsive
 
 -- Début du code -- 
 - Stockage des couleurs en variables CSS
 - Séparation des différentes sections en layouts 
 - Approfondissement de la structure du site, mise en place des contenus
 
 -- Mise en forme --
 - Conception visuelle des principales sections de la page d'accueil
 
 -- Script -- 
 - Implémentation de la partie JavaScript pour la section de recherche d'un nouvel artiste, avec preview sonore des trois derniers titres
 
 ### Jour 3 ###
 -- Mise en forme, seconde partie -- 
 - Conception visuelle de la page des artistes favoris
 - Mises à jour mineures sur le design de la première page
 
 -- Script -- 
 - Ecriture d'un fichier JSON pour stocker les informations des artistes mis en favoris
 - Elaboration d'un script pour changer l'encadré des favoris dynamiquement
 - Elaboration d'un script pour revenir à la page d'accueil 

 
 
 
