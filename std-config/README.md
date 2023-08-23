# Zanix Framework Standard Configurations

[![npm version](https://badge.fury.io/js/%40zanix%2Fstd-config.svg)](https://badge.fury.io/js/%40zanix%2Fstd-config)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Support and Contributions](#support-and-contributions)
- [License](#license)
- [Credits](#credits)
- [Acknowledgements](#acknowledgements)

## Introduction

Zanix Framework Standard Configurations is a package that provides base configurations for various tools commonly used in Zanix Framework projects. It aims to help streamline project setup and provide consistent configurations across different development environments.

This package includes basic configurations like the following:

- EditorConfig: Consistent indentation, line endings, and encoding for code editors
- lint-stagedrc: Configuration for running linters on staged files using lint-staged
- Jest preset: Base configuration for Jest testing framework
- Prettier: Opinionated code formatter configuration
- Husky: Git hooks configuration for pre-commit and pre-push actions
- tsconfig base: Base TypeScript configuration for Zanix Framework projects

## Installation

To install the Zanix Framework Standard Configurations package, use npm or yarn:

```bash
npm install --save-dev @zanix/std-config
```

or

```bash
yarn add --dev @zanix/std-config
```

## Usage

Each configuration file can be copied or extended and customized in your project's root directory. The following files are available in the `@zanix/std-config` package:

- `.editorconfig`: Copy this file to the root of your project to enforce consistent code formatting across different editors.
- `.lintstagedrc`: Copy this file to the root of your project to configure lint-staged to run linters on staged files.
- `jest-preset.js`: Create a `jest-config.js` file in the root directory of your project and preset the Zanix Framework Jest Config:
  ```json
  {
    "preset": "@zanix/std-config"
  }
  ```
- `prettier.js`: Create a `.prettierrc` file in the root of your project with the following content to use the opinionated code formatting rules defined by Zanix Framework.
  ```json
  "@zanix/std-config/prettier"
  ```
- `husky`: Copy this folder to the root of your project to configure Git hooks using Husky for pre-commit and pre-push actions.
- `tsconfig.json`: Extends this file in the `tsconfig` file of your project and customize it as needed to set the base TypeScript configuration for your Zanix Framework projects.
  ```json
  {
    "extends": "@zanix/std-config/tsconfig"
  }
  ```

## Support and Contributions

For more information on how to use the templates and get started with ZANIX configuration, please refer to the documentation or to the [changelog](./std-config/CHANGELOG.md#changelog).

Contributions are welcome! If you have suggestions, bug reports, or feature requests, please open an issue on the [GitHub repository](https://github.com/zanix-io/zjs-config/tree/master/std-config). Pull requests are also appreciated.

## License

Zanix Framework Standard Configurations is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Credits

Zanix Framework Standard Configurations is maintained and sponsored by Zanix Framework.

- GitHub: [https://github.com/zanix-io](https://github.com/zanix-io)

<a name="acknowledgements"></a>

## Acknowledgements ✨

We would like to express our gratitude to the developers of the tools and configurations used in this package. Their work has been instrumental in the development and maintenance of this project.
