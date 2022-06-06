import Nullable from "./nullable"
/**
 * Get value of key from cache store.
 */
type Get = (key: string) => Nullable<unknown>
/**
 * Set value to cache store for given key with expiry in days.
 */
type Set = (key: string, val: string, timeInDays: number) => void

/**
 *
 */
interface IStore {
	/**
	 * Gets value from store.
	 */
	get: Get
	/**
	 * Sets value to Store.
	 */
	set: Set
}

export type { Get as IStoreGet, Set as IStoreSet, IStore }
