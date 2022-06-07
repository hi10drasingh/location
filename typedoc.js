module.exports = {
	name: "Droom Google Location Plugin",
	includeVersion: true,
	plugin: ["typedoc-plugin-missing-exports", "typedoc-plugin-markdown"],
	entryPoints: ["./src"],
	entryPointStrategy: "expand",
	exclude: [
		"./src/modal/**/*.ts",
		"./src/modal/**/*.js"
	] /* Not Implemented Module */,
	out: "doc"
}
