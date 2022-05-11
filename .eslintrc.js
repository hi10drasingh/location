const prettierConfig = require("./prettier.config")

module.exports = {
    root: true,
    parser: "@babel/eslint-parser",
    extends: [
        "eslint:recommended",
        "plugin:prettier/recommended",
        "prettier",
        "airbnb"
    ],
    plugins: ["prettier", "jest", "react-hooks"],
    ignorePatterns: ["public/**/*", "app/build/*"],
    rules: {
        "prettier/prettier": ["error", prettierConfig],
        "global-require": 0,
        "linebreak-style": 0,
        "no-global-assign": 0,
        "no-console": 0,
        "no-unused-vars": 1
    }
}
