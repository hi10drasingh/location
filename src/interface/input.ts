type BindInputFunc = (selector: string, isGlobal: boolean) => void

type UnbindInputFunc = (element: HTMLInputElement) => void

export type { BindInputFunc, UnbindInputFunc }
