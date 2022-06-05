module.exports = {
	plugin: ["typedoc-plugin-markdown"],
	entryPoints: ["./src"],
	entryPointStrategy: "expand",
	exclude: ["**/*.test.ts"],
	out: "doc"
}
