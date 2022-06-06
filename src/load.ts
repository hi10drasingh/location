import { LoadSuggestion } from "./suggestion"
import {
	LoadCacheStore,
	LoadUserStore,
	GetCacheData,
	getUserLocation
} from "./persist"
import { TriggerGlobalChange } from "./location"
import { ErrorHandler } from "./utils"
import { GetCurrentLocation } from "./map"

/**
 * Loads user location data from db.
 *
 * @returns {void}
 */
const loadDataFromDB = (): void => {
	getUserLocation()
		.then(dbData => {
			if (dbData) {
				const newCachedData = GetCacheData()
				if (!newCachedData) {
					TriggerGlobalChange(newCachedData)
				}
			}
		})
		.catch(err => ErrorHandler.error(err))
}

/**
 * Loads all dependencies required for plugin.
 * Checks if old data exist in store then update global data.
 * Else Get data from databases and then update global data.
 *
 * @returns {void}
 */
const load = (): void => {
	LoadSuggestion()
	LoadCacheStore()
	LoadUserStore()

	const cachedData = GetCacheData()

	if (!cachedData) {
		GetCurrentLocation().catch(() => loadDataFromDB())
	} else {
		TriggerGlobalChange(cachedData)
	}
}

export default load
