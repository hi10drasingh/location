module.exports = {
    root: true,
    plugins: ["jsdoc"],
    overrides: [
        {
            files: ["**/*.ts", "**/*.tsx"],
            parser: "@typescript-eslint/parser",
            plugins: ["@typescript-eslint", "jsdoc"],
            env: {
                browser: true,
                es2021: true
            },
            globals: {
                Nullable: "readonly",
                DroomResponse: "readonly",
                google: "readonly"
            },
            extends: [
                "airbnb-base",
                "airbnb-typescript/base",
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking",
                "eslint:recommended",
                "plugin:jsdoc/recommended",
                "prettier" // Make sure this is the last
            ],
            parserOptions: {
                project: "./tsconfig.json",
                ecmaVersion: "latest"
            },
            rules: {
                "max-lines-per-function": ["error", 30],
                "require-jsdoc": 2,
                "jsdoc/check-indentation": 1,
                "jsdoc/check-line-alignment": 1,
                "jsdoc/match-description": 1,
                "jsdoc/require-description": 1,
                "jsdoc/require-description-complete-sentence": 1,
                "jsdoc/require-hyphen-before-param-description": 1,
                "jsdoc/require-throws": 1,
                "@typescript-eslint/consistent-type-assertions": "error",
                "valid-jsdoc": [
                    "error",
                    {
                        prefer: {
                            arg: "param",
                            argument: "param",
                            class: "constructor",
                            return: "returns",
                            virtual: "abstract"
                        },
                        preferType: {
                            Boolean: "boolean",
                            Number: "number",
                            object: "Object",
                            String: "string"
                        }
                    }
                ]
            }
        }
    ],
    extends: [
        "airbnb-base",
        "eslint:recommended",
        "plugin:jsdoc/recommended",
        "prettier" // Make sure this is the last
    ],
    rules: {
        "max-lines-per-function": ["error", 30],
        "require-jsdoc": 2,
        "jsdoc/check-indentation": 1,
        "jsdoc/check-line-alignment": 1,
        "jsdoc/match-description": 1,
        "jsdoc/require-description": 1,
        "jsdoc/require-description-complete-sentence": 1,
        "jsdoc/require-hyphen-before-param-description": 1,
        "jsdoc/require-throws": 1,
        "valid-jsdoc": [
            "error",
            {
                prefer: {
                    arg: "param",
                    argument: "param",
                    class: "constructor",
                    return: "returns",
                    virtual: "abstract"
                },
                preferType: {
                    Boolean: "boolean",
                    Number: "number",
                    object: "Object",
                    String: "string"
                }
            }
        ]
    }
}
