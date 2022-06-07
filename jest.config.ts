import type { Config } from "@jest/types"

// Sync object
const config: Config.InitialOptions = {
	preset: "ts-jest",
	verbose: true,
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
	transform: {
		"^.+\\.(ts|tsx)?$": "ts-jest",
		"^.+\\.(js|jsx)$": "babel-jest",
		".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
			"jest-transform-stub"
	},
	collectCoverage: true,
	coverageReporters: ["json", "html"]
}
export default config
