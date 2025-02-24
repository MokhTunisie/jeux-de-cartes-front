# Jeu de Cartes

Ce projet est une application Vue.js pour tirer et trier des cartes de jeu.

## Prérequis

- Git
- Docker

## Installation

1. Clonez le dépôt :
    ```bash
    git clone git@github.com:MokhTunisie/jeux-de-cartes-front.git
    cd jeux-de-cartes-front
    ```
2. **Démarrer les conteneurs Docker :**
    ```sh
    docker-compose up -d
    ```

3. **Installer les dépendances dans le conteneur :**
    ```sh
    docker-compose exec app npm install
    ```

4. **Configurer les variables d'environnement :**
   Copier le fichier `.env` et ajuster les paramètres si nécessaire.
    ```sh
    cp .env.dist .env

## Utilisation

2. Ouvrez votre navigateur et allez à l'adresse `http://localhost:3000`.

## Structure du projet

- `components/PlayingCard.vue` : Composant pour afficher une carte de jeu.
- `components/Palm.vue` : Composant pour afficher une liste de cartes.
- `pages/index.vue` : Page principale de l'application.
- `services/CardService.js` : Service pour récupérer et trier les cartes.

## Auteurs

- **Mokhtar OUNIS** - *Développeur principal*