module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    env: {
        browser: true,
        es2021: true
    },
    globals: {
        Nullable: "readonly"
    },
    extends: [
        "airbnb-base",
        "airbnb-typescript/base",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "eslint:recommended",
        "prettier" // Make sure this is the last
    ],
    parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: "latest"
    },
    ignorePatterns: [],
    rules: {
        "max-lines-per-function": ["error", 30],
        "@typescript-eslint/consistent-type-assertions": "error"
    }
}
