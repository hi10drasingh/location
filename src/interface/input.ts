/**
 * Bind as input element to location plugin.
 */
type BindInputFunc = (selector: string, isGlobal: boolean) => void

/**
 * Unbind Input Element from plugin.
 */
type UnbindInputFunc = (element: HTMLInputElement) => void

export type { BindInputFunc, UnbindInputFunc }
