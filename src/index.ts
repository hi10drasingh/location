import LoadDependencies from "./load"
import { LocationDefaultConfig, LocationAttrSlug } from "./constant"
import { Plugin, Config } from "./interface"
import { BindInput, UnbindInput } from "./input"

/**
 * Binds plugins to a element with given selector.
 *
 * @param {string} selector - Selector for the element.
 * @param {Config} config - Plugin Config for the element.
 * @throws Error.
 */
const bind = (selector: string, config?: Config) => {
	const conf = {
		...LocationDefaultConfig,
		...config
	}

	const elements = document.querySelectorAll(selector)

	if (!elements || !elements.length) {
		throw new Error("Please provide a valid selector")
	}

	if (elements.length > 1) {
		throw new Error("Please provide a unique selector")
	}

	const element = elements[0] as HTMLElement

	if (element.tagName === "INPUT") {
		BindInput(selector, conf.isGlobal)
	} else {
		throw new Error("Please provide a valid input selector")
	}
}

/**
 * Unbinds plugins to a element with given selector.
 *
 * @param {string} selector - Selector for the element.
 * @throws Error.
 */
const unbind = (selector: string) => {
	const elements = document.querySelectorAll(selector)

	if (!elements || !elements.length) {
		throw new Error("Please provide a valid selector")
	}

	if (elements.length > 1) {
		throw new Error("Please provide a unique selector")
	}

	const element = elements[0] as HTMLElement

	if (element.tagName === "INPUT") {
		if (!element.hasAttribute(LocationAttrSlug)) {
			throw new Error("Plugin is not initialized on provide input")
		}
		UnbindInput(elements[0] as HTMLInputElement)
	} else {
		throw new Error("Please provide a valid input selector")
	}
}

/**
 * Ruturn public plugin object.
 *
 * @returns {Plugin} - Object of publicily accessible method of Location Plugin.
 */
const PluginFunc = (): Plugin => {
	LoadDependencies()
	return {
		bind,
		unbind
	}
}

const LocationPlugin: Plugin = PluginFunc()

export default LocationPlugin
