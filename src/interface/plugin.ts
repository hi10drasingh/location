import { BindInputFunc, UnbindInputFunc } from "./input"

interface Plugin {
    bindInput: BindInputFunc
    unbindInput: UnbindInputFunc
}

type FactoryFunc = () => Plugin

export type { Plugin, FactoryFunc }
