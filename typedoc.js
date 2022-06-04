module.exports = {
	// plugin: ["typedoc-plugin-markdown"],
	entryPoints: ["./src/index"],
	entryPointStrategy: "expand",
	exclude: ["**/*.test.ts"],
	out: "doc"
}
