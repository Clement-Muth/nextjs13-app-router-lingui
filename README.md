<div align="center">

  <h1>Next.js project with Lingui</h1>

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

# Next.js Project with Lingui

This project is an example of integration of Lingui with Next.js. It uses Next.js version 13.3.1 and Lingui version 4.2.0.

## Goal

The purpose of this project is to test the integration of Lingui, a translation framework, with Next.js, a JavaScript framework based on React for web application development.

## Fonctionnalies

- Translation of text within the application using Lingui.
- Utilization of ROME as the linter and formatter to maintain code quality.
- Usage of Yarn Berry with hardlinks-local and nodeLinker node-modules to manage dependencies.

## Prerequisites

Before starting, make sure you have the following installed on your system:

- Node.js (version >=16.14.0)
- Yarn (version 3.5.1)
- 
## Installation

1. Clone this GitHub repository to your local machine:

```shell
git clone https://github.com/votre-utilisateur/nom-du-repo.git
```

2. Navigate to the project directory:

```shell
cd name-of-repo
```

3. Install the project dependencies using Yarn:

```shell
yarn install
```

## Configuration

To configure Lingui, you need to follow these steps:

1. Create a **`.env`** file at the root of the project and add the necessary environment variables. Refer to the **`.env.example`** file for the required variables.

2. Modify the Lingui configuration files (**`lingui.config.js`** and **`next.config.js`**) to adjust the settings to your project.

## Usage

To launch the application in development mode, run the following command:

```shell
yarn dev
```

This starts the Next.js development server, and you can access the application in your browser at the address **`http://localhost:3000`**.

To generate an optimized version of the application for production, run the following command:

```shell
yarn build
```

This generates the application's build in the **`.next`** directory, ready to be deployed to a server.

To run tests, use the following command:

```shell
yarn test
```

# Yarn Berry avec Hardlinks-local et NodeLinker node-modules

This project uses Yarn Berry with the features of hardlinks-local and nodeLinker node-modules to manage dependencies efficiently and optimally.

## What is Yarn Berry?

Yarn Berry is an enhanced version of Yarn that brings new features and improved performance. It replaces Yarn's traditional package manager with a new architecture based on Plug'n'Play (PnP). This enables faster, lighter, and deterministic dependency management.

## Why use Yarn Berry?

Yarn Berry offers several advantages:

- **Faster dependency management:** With the PnP architecture, Yarn Berry avoids costly dependency installations and resolutions, resulting in faster build and startup times for your application.

- **Deterministic dependency resolution:** Yarn Berry ensures installation reproducibility by using a dependency resolution algorithm based on strict rules. This means each team member gets exactly the same dependency versions during installation.

- **Simplified version management:** Yarn Berry makes it easy to update and lock dependency versions through simple commands and built-in tools.

# Rome - Linter and Formatter

This project uses Rome as the linter and formatter to maintain code quality. Rome is a development tool for JavaScript and TypeScript that provides advanced static analysis, linting, and formatting features.

## What is Rome?

Rome is an integrated toolchain for JavaScript and TypeScript development. It offers a modern approach to project management, providing features such as linting, formatting, compilation, and more.
