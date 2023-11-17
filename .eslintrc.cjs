module.exports = {
  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    '@unocss',
  ],

  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/require-v-for-key': 'off',
    'vue/valid-v-for': 'off',
    'vue/no-v-html': 'off',
  },
};
