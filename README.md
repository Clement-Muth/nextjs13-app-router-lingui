<div align="center">

  <h1>Projet Next.js avec Lingui</h1>

  <a href="https://github.com/yarnpkg/berry" alt="Yarn berry">
    <img src="https://img.shields.io/badge/yarnpkg%2Fberry-3.5.1-blue" />
  </a>
  <a href="https://rome.tools/" alt="Rometools">
    <img src="https://img.shields.io/badge/rometools-12.1.2-blue" />
  </a>
  
<hr />

<h2>Lingui<sub>js</sub></h2>

🌍📖 A readable, automated, and optimized (3 kb) internationalization for JavaScript

<a href="https://github.com/lingui/js-lingui" alt="Lingui">
  <img src="https://img.shields.io/badge/Lingui-4.2.0-blue" />
</a>
<a href="https://github.com/lingui/swc-plugin" alt="Lingui swc">
  <img src="https://img.shields.io/badge/%40lingui%2Fswc--plugin-4.0.0-blue" />
</a>
  
[**Documentation**](https://github.com/lingui/js-lingui) · [**Quickstart**](https://github.com/lingui/js-lingui/blob/main/README.md#quickstart) · [**Example**](https://github.com/lingui/js-lingui/blob/main/README.md#example)

<hr />

<p align="center">
  <a href="https://nextjs.org">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png">
      <img src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" height="128">
    </picture>
    <h1 align="center">Next.js</h1>
  </a>
</p>

<a href="https://nextjs.org/" alt="Nextjs">
  <img src="https://img.shields.io/badge/Nextjs-13.3.1-blue" />
</a>
  
[**Documentation**](https://nextjs.org/docs) · [**Quickstart**](https://nextjs.org/learn) · [**Example**](https://github.com/vercel/next.js/tree/canary/examples)

</div>

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

# Yarn Berry avec Hardlinks-local et NodeLinker node-modules

Ce projet utilise Yarn Berry avec les fonctionnalités de hardlinks-local et de nodeLinker node-modules pour gérer les dépendances de manière efficace et optimisée.

## Qu'est-ce que Yarn Berry ?

Yarn Berry est une version améliorée de Yarn, qui apporte de nouvelles fonctionnalités et des performances accrues. Il remplace le gestionnaire de paquets classique de Yarn par une nouvelle architecture basée sur Plug'n'Play (PnP). Cela permet une gestion des dépendances plus rapide, légère et déterministe.

## Pourquoi utiliser Yarn Berry ?

Yarn Berry offre plusieurs avantages :

- **Gestion des dépendances plus rapide :** Avec l'architecture PnP, Yarn Berry évite les installations et les résolutions de dépendances coûteuses, ce qui se traduit par des temps de construction et de démarrage plus rapides de votre application.

- **Résolution de dépendances déterministe :** Yarn Berry garantit la reproductibilité des installations en utilisant un algorithme de résolution des dépendances basé sur des règles strictes. Cela signifie que chaque membre de l'équipe obtient exactement les mêmes versions de dépendances lors de l'installation.

- **Gestion des versions simplifiée :** Yarn Berry facilite la mise à jour et le gel des versions des dépendances grâce à des commandes simples et des outils intégrés.

# Rome - Linter et Formatter

Ce projet utilise Rome comme linter et formatter pour maintenir un code de qualité. Rome est un outil de développement pour JavaScript et TypeScript qui fournit des fonctionnalités avancées d'analyse statique, de linting et de formatage.

## Qu'est-ce que Rome ?

Rome est une suite d'outils intégrée pour le développement JavaScript et TypeScript. Il offre une approche moderne pour la gestion des projets, en fournissant des fonctionnalités de linting, de formatage, de compilation et bien plus encore.
