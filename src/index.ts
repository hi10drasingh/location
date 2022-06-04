import Plugin from "./plugin"
import type { FactoryFunc } from "./interface"

/**
 * Initializes Location Plugin and set it to global object.
 *
 * @param {Window} root - Global Variable Window.
 * @param {FactoryFunc} factory - Plugin Factory Function.
 * @returns {void}
 */

const init = (root: Window, factory: FactoryFunc): void => {
	const newRoot = root
	newRoot.LocationPlugin = factory()
}

init(window, Plugin)
