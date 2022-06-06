import { GetCurrentLocation } from "./map"
import { ErrorHandler } from "./utils"
import { TriggerGlobalChange } from "./location"
import {
	LoadCacheStore,
	LoadUserStore,
	GetCacheData,
	GetUserLocation
} from "./persist"
import { LoadSuggestion } from "./suggestion"

/**
 * Loads user location data from db.
 *
 * @returns {void}
 */
const loadDataFromDB = (): void => {
	GetUserLocation()
		.then(dbData => {
			if (dbData) {
				const newCachedData = GetCacheData()
				if (!newCachedData) {
					TriggerGlobalChange(dbData)
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
