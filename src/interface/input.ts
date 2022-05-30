type Listener = {
    [key: string]: (event: Event) => void
}

interface CustomHTMLInputElement extends HTMLInputElement {
    listeners: Listener[]
}

type BindInputFunc = (element: HTMLInputElement, isGlobal: boolean) => void

type UnbindInputFunc = (element: CustomHTMLInputElement) => void

export type { CustomHTMLInputElement, Listener, BindInputFunc, UnbindInputFunc }
