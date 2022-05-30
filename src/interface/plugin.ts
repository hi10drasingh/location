import { CustomHTMLInputElement } from "./input"

interface Plugin {
    bindInput: (ele: HTMLInputElement, isGlobal: boolean) => void
    unbindInput: (ele: CustomHTMLInputElement) => void
}

type FactoryFunc = () => Plugin

export type { Plugin, FactoryFunc }
