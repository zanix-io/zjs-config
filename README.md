# Zanix Framework Config Repository

Welcome to the Zanix Framework Config documentation! This README provides an overview of the functionality and usage.

## Table of Contents

- [Introduction](#introduction)
- Configuration libraries
  - [ESLint Configurations](#eslint-configurations)
  - [Standard Configurations](#standard-configurations)
- [Support and contributions](#support-and-contributions)

## Introduction

This repository contains the following packages for standardized configurations and linting rules:

- [eslint-config](./eslint-config/README.md): Contains ESLint configurations for maintaining code quality and adhering to coding standards.
- [std-config](./std-config/README.md): Provides base configurations for various tools such as EditorConfig, lint-staged, Jest, Prettier, Husky, and a TypeScript configuration base for Zanix Framework projects.

## ESLint Configurations

The [eslint-config](./eslint-config/README.md) package offers pre-defined ESLint configurations that can be used in your projects. It helps maintain consistent coding standards and enforces best practices for code quality.

To use the ESLint configurations, follow the instructions provided in the [eslint-config README](./eslint-config/README.md).

## Standard Configurations

The [std-config](./std-config/README.md) package provides base configurations for different tools commonly used in Zanix Framework projects. These configurations include:

- EditorConfig: Ensures consistent code formatting across different editors and IDEs.
- lint-staged: Configures pre-commit linting to prevent committing code that does not pass linting rules.
- Jest preset: Provides a set of recommended configurations for Jest testing framework.
- Prettier: Sets up code formatting rules for consistent code styling.
- Husky: Configures Git hooks for running scripts before committing or pushing code.
- TypeScript configuration base: Offers a base tsconfig.json file with recommended settings for Zanix Framework projects.

To use the standard configurations, refer to the [std-config README](./std-config/README.md) for detailed instructions and examples.

## Support and contributions

If you encounter any issues or have suggestions for improvements, please feel free to open an issue in the respective package repository. Contributions and pull requests are also welcome.
