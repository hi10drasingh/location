import { CustomHTMLInputElement } from "./input"

interface Plugin {
    bindInput: (ele: HTMLInputElement, isGlobal: boolean) => Promise<void>
    unbindInput: (ele: CustomHTMLInputElement) => Promise<void>
}

type FactoryFunc = () => Plugin

export type { Plugin, FactoryFunc }
