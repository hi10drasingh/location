/**
 * Plugin init config.
 */
interface Config {
	[key: string]: boolean
	/**
	 * Is Input registed as global.
	 */
	isGlobal: boolean
}
/**
 * Plugin Function Structure.
 */
interface Plugin {
	/**
	 * Bind an element with given config to plugin.
	 */
	bind: (selector: string, config?: Config) => void
	/**
	 * Bind an element from plugin.
	 */
	unbind: (selector: string) => void
}

export type { Plugin, Config }
