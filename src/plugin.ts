import { BindInput, UnbindInput } from "./input"
import {
	Plugin,
	Settings,
	type BindInputFunc,
	type UnbindInputFunc
} from "./interface"
import LoadWrapper from "./load"

/**
 * Ruturn public plugin object.
 *
 * @returns {Plugin} - Object of publicily accessible method of Location Plugin.
 */
const PluginFunc = (): Plugin => {
	const settings: Settings = {
		isLoaded: false
	}

	return {
		bindInput: LoadWrapper<BindInputFunc>(settings, BindInput),
		unbindInput: LoadWrapper<UnbindInputFunc>(settings, UnbindInput)
	}
}

export default PluginFunc
