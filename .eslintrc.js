module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true
    },
    extends: [
        "airbnb-base",
        "prettier" // Make sure this is the last
    ],
    parserOptions: {
        ecmaVersion: "latest"
    },
    rules: {
        "global-require": 0,
        "linebreak-style": 0,
        "no-global-assign": 0,
        "no-console": 0,
        "no-unused-vars": 1
    }
}
