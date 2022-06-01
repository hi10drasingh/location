module.exports = {
    plugin: ["typedoc-plugin-missing-exports"],
    entryPoints: ["./src"],
    entryPointStrategy: "expand",
    out: "doc"
}
