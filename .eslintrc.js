module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  extends: [
    'airbnb-base',
    "eslint:recommended",
    'plugin:vue/vue3-recommended',
    'prettier/vue',
    'plugin:prettier/recommended'
  ],
  rules: {
    'comma-dangle': 'off',
    'class-methods-use-this': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/prefer-default-export': 'off',
    "vue/component-name-in-template-casing": ["error", "kebab-case", {
      "ignores": []
    }],
    "vue/html-self-closing": "off",
    'prettier/prettier': ['error', { 'singleQuote': true, 'endOfLine': 'auto' }]
  },
};