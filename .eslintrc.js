module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'prettier', // Make sure this is the last
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
  },
};
