module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    mocha: true
  },
  extends: ['airbnb-base'],
  plugins: ['vue'],
  rules: {
    semi: 'off',
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
}
