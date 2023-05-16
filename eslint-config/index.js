module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  root: true,
  ignorePatterns: ['.eslintrc.js', '.znx', '.eslintrc'],
  extends: [
    'eslint:recommended',
    './rules/best-practices.js',
    './rules/errors.js',
    './rules/imports.js',
    './rules/node.js',
    './rules/prettier.js',
    './rules/style.js',
    './rules/tests.js',
    './rules/typescript.js'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  }
}
