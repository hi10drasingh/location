const rules = {
	"max-lines-per-function": ["error", 30],
	"jsdoc/check-indentation": 1,
	"jsdoc/check-line-alignment": 1,
	"jsdoc/match-description": 1,
	"jsdoc/require-description": 1,
	"jsdoc/require-description-complete-sentence": 1,
	"jsdoc/require-hyphen-before-param-description": 1,
	"jsdoc/require-throws": 1,
	"import/no-extraneous-dependencies": ["error", { devDependencies: true }]
}

const extendPlugins = [
	"airbnb-base",
	"eslint:recommended",
	"plugin:jsdoc/recommended",
	"plugin:compat/recommended",
	"plugin:jest-dom/recommended",
	"prettier" // Make sure this is the last
]

module.exports = {
	root: true,
	plugins: ["jsdoc", "jest-dom"],
	env: {
		browser: true,
		es2021: true
	},
	extends: extendPlugins,
	rules: {
		...rules,
		"require-jsdoc": 2,
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
	},
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
			plugins: ["@typescript-eslint", "jsdoc", "jest-dom"],
			extends: [
				...extendPlugins,
				"airbnb-typescript/base",
				"plugin:@typescript-eslint/eslint-recommended",
				"plugin:@typescript-eslint/recommended",
				"plugin:@typescript-eslint/recommended-requiring-type-checking",
				"prettier" // Make sure this is the last
			],
			globals: {
				google: "readonly"
			},
			parserOptions: {
				project: "./tsconfig.json",
				ecmaVersion: "latest"
			},
			rules: {
				...rules,
				"jsdoc/require-jsdoc": [
					"error",
					{
						contexts: [
							"TSInterfaceDeclaration",
							"TSMethodSignature",
							"TSPropertySignature",
							"TSTypeAliasDeclaration",
							"TSEnumDeclaration"
						],
						require: {
							FunctionExpression: true,
							ClassDeclaration: true,
							MethodDefinition: true,
							ArrowFunctionExpression: true,
							ClassExpression: true
						}
					}
				],
				"@typescript-eslint/consistent-type-assertions": "error"
			}
		}
	]
}
