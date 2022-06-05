const rules = {
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

const extendPlugins = [
	"airbnb-base",
	"eslint:recommended",
	"plugin:jsdoc/recommended",
	"plugin:compat/recommended",
	"prettier" // Make sure this is the last
]

module.exports = {
	root: true,
	plugins: ["jsdoc"],
	env: {
		browser: true,
		es2021: true
	},
	extends: extendPlugins,
	rules: rules,
	settings: {
		polyfills: [
			// Example of marking entire API and all methods and properties as polyfilled
			"Promise",
			// Example of API with no property (i.e. a function)
			"fetch"
		]
	},
	overrides: [
		{
			files: ["**/*.ts", "**/*.tsx"],
			parser: "@typescript-eslint/parser",
			plugins: ["@typescript-eslint", "jsdoc"],
			globals: {
				Nullable: "readonly",
				DroomResponse: "readonly",
				google: "readonly"
			},
			extends: [
				...extendPlugins,
				"airbnb-typescript/base",
				"plugin:@typescript-eslint/eslint-recommended",
				"plugin:@typescript-eslint/recommended",
				"plugin:@typescript-eslint/recommended-requiring-type-checking",
				"prettier" // Make sure this is the last
			],
			parserOptions: {
				project: "./tsconfig.json",
				ecmaVersion: "latest"
			},
			rules: {
				...rules,
				"@typescript-eslint/consistent-type-assertions": "error"
			}
		}
	]
}
