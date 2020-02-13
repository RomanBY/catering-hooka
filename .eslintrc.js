module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/base'
  ],
  // add your custom rules here
  rules: {
    'no-useless-constructor': 0,
    'vue/no-unused-vars': 1,
    'vue/require-component-is': 0
  }
}
