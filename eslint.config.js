import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import babelParser from '@babel/eslint-parser';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import reactApp from 'eslint-config-react-app';

export default [
  js.configs.recommended,
  reactApp,
  prettierConfig,
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    plugins: {
      react,
      reactHooks,
      'jsx-a11y': jsxA11y,
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      'react/react-in-jsx-scope': 'off',
      'linebreak-style': ['error', 'unix'],
      'no-console': 'warn',
      'no-unused-vars': 'warn',
    },
    env: {
      browser: true,
      es6: true,
      jest: true,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
