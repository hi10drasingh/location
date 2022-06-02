// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path")

const isProduction = process.env.NODE_ENV === "production"

const config = {
	entry: ["./src/index.ts"],
	devtool: "source-map",
	output: {
		path: path.resolve(__dirname, "dist")
	},
	devServer: {
		open: true,
		host: "localhost"
	},
	plugins: [
		// Add your plugins here
		// Learn more about plugins from https://webpack.js.org/configuration/plugins/
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: ["ts-loader"]
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js", ".jsx"]
	}
}

module.exports = () => {
	if (isProduction) {
		config.mode = "production"
	} else {
		config.mode = "development"
	}
	return config
}
