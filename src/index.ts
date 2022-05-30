/* eslint-disable @typescript-eslint/no-explicit-any */
import { BindInput, UnbindInput } from "./input"
import { Plugin, FactoryFunc } from "./interface"
import { ErrorHandler } from "./utils"
import Load from "./load"
import type { BindInputFunc, UnbindInputFunc } from "./interface"

interface Settings {
    [key: string]: unknown
    isLoaded: boolean
}

const wrapper =
    <F extends (...params: any[]) => void>(settings: Settings, CB: F) =>
    async (...args: any[]) => {
        const newSettings = settings
        if (!newSettings.isLoaded) {
            await Load().catch(err => ErrorHandler.error(err))
            // eslint-disable-next-line no-param-reassign
            newSettings.isLoaded = true
        }
        CB(args)
    }

const pluginFunc = (): Plugin => {
    const settings: Settings = {
        isLoaded: false
    }

    return {
        bindInput: wrapper<BindInputFunc>(settings, BindInput),
        unbindInput: wrapper<UnbindInputFunc>(settings, UnbindInput)
    }
}

;((root: Window, factory: FactoryFunc): void => {
    const newRoot = root
    newRoot.LocationPlugin = factory()
})(window, pluginFunc)
