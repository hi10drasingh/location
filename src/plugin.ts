import { BindInput, UnbindInput } from "./input"
import { Plugin } from "./interface"
import LoadDependencies from "./load"

/**
 * Ruturn public plugin object.
 *
 * @returns {Plugin} - Object of publicily accessible method of Location Plugin.
 */
const PluginFunc = (): Plugin => {
	LoadDependencies()
	return {
		bindInput: BindInput,
		unbindInput: UnbindInput
	}
}

export default PluginFunc
