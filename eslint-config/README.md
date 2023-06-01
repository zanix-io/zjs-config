# Zanix Framework ESLint Config

[![npm version](https://badge.fury.io/js/%40zanix%2Feslint-config.svg)](https://badge.fury.io/js/%40zanix%2Feslint-config)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Overview

Zanix Framework ESLint Config is a shareable ESLint configuration package designed for Zanix Framework projects. It provides a set of ESLint rules and configurations to ensure consistent code style and quality across Zanix Framework applications.

This package includes the following features:

- Pre-configured ESLint rules optimized for Zanix Framework projects
- Consistent code style guidelines for JavaScript and TypeScript
- Support for popular plugins and extensions commonly used in Zanix Framework projects

## Installation

To install the Zanix Framework ESLint Config package, use npm or yarn:

```bash
npm install --save-dev @zanix/eslint-config
```

or

```bash
yarn add --dev @zanix/eslint-config
```

## Usage

To use the Zanix Framework ESLint Config in your project, create an `.eslintrc.js` or `.eslintrc.json` file in the root directory of your project and extend the Zanix Framework ESLint Config:

```json
{
  "extends": "@zanix/eslint-config"
}
```

You can customize the configuration by extending the base configuration and adding or overriding rules specific to your project.

For TypeScript projects, you can extend the TypeScript configuration:

```json
{
  "extends": "@zanix"
}
```

## License

Zanix Framework ESLint Config is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Contributing

Contributions are welcome! If you have suggestions, bug reports, or feature requests, please open an issue on the [GitHub repository](https://github.com/zanix-io/zjs-config/tree/master/eslint-config). Pull requests are also appreciated.

## Credits

Zanix Framework ESLint Config is maintained and sponsored by Zanix Framework.

- GitHub: [https://github.com/zanix-io](https://github.com/zanix-io)

## Acknowledgements

We would like to express our gratitude to the developers of ESLint and all the contributors who have made their plugins and configurations available. Their work has been instrumental in the development of this ESLint configuration.
