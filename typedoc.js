module.exports = {
    plugin: ["typedoc-plugin-missing-exports", "typedoc-plugin-markdown"],
    entryPoints: ["./src"],
    entryPointStrategy: "expand",
    out: "doc"
}
