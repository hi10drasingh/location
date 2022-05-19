module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "airbnb-base",
        "airbnb-typescript/base",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier" // Make sure this is the last
    ],
    parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: "latest"
    },
    rules: {}
}
