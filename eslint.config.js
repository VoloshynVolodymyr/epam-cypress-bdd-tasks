const babelParser = require('@babel/eslint-parser')
const cypressPlugin = require('eslint-plugin-cypress')
const prettierPlugin = require('eslint-plugin-prettier')
const prettierConfig = require('eslint-config-prettier')

module.exports = [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: babelParser,
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-typescript']
        }
      }
    },
    plugins: {
      cypress: cypressPlugin,
      prettier: prettierPlugin
    },
    rules: {
      ...cypressPlugin.configs.recommended.rules,
      'prettier/prettier': 'error',
      'no-unused-vars': 'error',
      eqeqeq: ['error', 'always'],
      'no-var': 'error',
      'prefer-const': 'error'
    }
  },
  prettierConfig,
  {
    ignores: ['node_modules/', 'cypress/reports/', 'cypress/videos/', 'cypress/screenshots/']
  }
]
