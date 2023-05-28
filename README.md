# Projet Next.js avec Lingui

Ce projet est un exemple d'intégration de Lingui avec Next.js. Il utilise Next.js version 13.3.1 et Lingui version 4.2.0.

## Objectif

Le but de ce projet est de tester l'intégration de Lingui, un framework de traduction, avec Next.js, un framework JavaScript basé sur React pour le développement d'applications web.

## Fonctionnalités

- Prise en charge de la traduction des textes dans l'application à l'aide de Lingui.
- Utilisation de ROME comme linter et formatter pour maintenir un code de qualité.
- Utilisation de Yarn Berry avec hardlinks-local et nodeLinker node-modules pour gérer les dépendances.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre système :

- Node.js (version >=16.14.0)
- Yarn (version 3.5.1)

## Installation

1. Clonez ce dépôt GitHub sur votre machine locale :

```shell
git clone https://github.com/votre-utilisateur/nom-du-repo.git
```

2. Accédez au répertoire du projet :

```shell
cd nom-du-repo
```

3. Installez les dépendances du projet à l'aide de Yarn :

```shell
yarn install
```

## Configuration

Pour configurer Lingui, vous devez effectuer les étapes suivantes :

1. Créez un fichier **`.env`** à la racine du projet et ajoutez les variables d'environnement nécessaires. Consultez le fichier **`.env.example`** pour connaître les variables requises.

2. Modifiez les fichiers de configuration Lingui (**`lingui.config.js`** et **`next.config.js`**) pour adapter les paramètres à votre projet.

## Utilisation

Pour lancer l'application en mode développement, exécutez la commande suivante :

```shell
yarn dev
```

Cela démarre le serveur de développement Next.js et vous pouvez accéder à l'application dans votre navigateur à l'adresse **`http://localhost:3000`**.

Pour générer une version optimisée de l'application pour la production, exécutez la commande suivante :

```shell
yarn build
```

Cela génère le build de l'application dans le répertoire **`.next`**, prêts à être déployés sur un serveur.

Pour exécuter les tests, utilisez la commande suivante :

```shell
yarn test
```
