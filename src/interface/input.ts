type Listener = {
    [key: string]: (event: Event) => void
}

interface CustomHTMLInputElement extends HTMLInputElement {
    listeners: Listener[]
}

export type { CustomHTMLInputElement, Listener }
