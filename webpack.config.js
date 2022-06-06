// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path")

const isProduction = process.env.NODE_ENV === "production"

const TerserPlugin = require("terser-webpack-plugin")

const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")

const config = {
	entry: {
		"location-plugin": "./src/index.ts",
		"location-plugin.min": "./src/index.ts"
	},
	watch: process.env.WATCH === "true",
	devtool: "source-map",
	output: {
		path: path.resolve(__dirname, "_bundles"),
		filename: "[name].js",
		library: {
			type: "umd",
			export: "default",
			name: "LocationPlugin",
			umdNamedDefine: true
		}
	},
	devServer: {
		open: true,
		host: "localhost"
	},
	plugins: [new ForkTsCheckerWebpackPlugin()],
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				test: /\.min\.js$/i
			})
		]
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader", "ts-loader"]
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
