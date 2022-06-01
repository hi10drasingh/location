/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { BindInput, UnbindInput } from "./input"
import { Plugin, FactoryFunc, Settings } from "./interface"
import LoadWrapper from "./load"
import type { BindInputFunc, UnbindInputFunc } from "./interface"

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

;((root: Window, factory: FactoryFunc): void => {
    const newRoot = root
    newRoot.LocationPlugin = factory()
})(window, pluginFunc)
