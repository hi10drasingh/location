import { BindInput, UnbindInput } from "./input"
import { Plugin, FactoryFunc, Settings , type BindInputFunc, type UnbindInputFunc } from "./interface"
import LoadWrapper from "./load"


/**
 * Ruturn public plugin object.
 *
 * @returns {Plugin} - Object of publicily accessible method of Location Plugin.
 */
const pluginFunc = (): Plugin => {
    const settings: Settings = {
        isLoaded: false
    }

    return {
        bindInput: LoadWrapper<BindInputFunc>(settings, BindInput),
        unbindInput: LoadWrapper<UnbindInputFunc>(settings, UnbindInput)
    }
}

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

init(window, pluginFunc)
