import { BindInput, UnbindInput } from "./input"
import { Plugin, FactoryFunc } from "./interface"

const init = (root: Window, factory: FactoryFunc): void => {
    const newRoot = root
    newRoot.LocationPlugin = factory()
}

const pluginFunc = (): Plugin => ({
    bindInput: BindInput,
    unbindInput: UnbindInput
})

init(window, pluginFunc)
