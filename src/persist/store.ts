import {
	LocalStoreGet,
	LocalStoreSet,
	CookieStoreGet,
	CookieStoreSet,
	DeepEqual
} from "../utils"
import { LocationChangeEvent, LocationDefaultData } from "../constant"
import IPlaceData from "../interface"

const cookieKey = "dul"

const lsKey = "location_data"

const timeInDays = 365

/**
 * Return location data from Local Storage.
 *
 * @returns {IPlaceData} - Place Data.
 */
const getLSData = (): IPlaceData => LocalStoreGet(lsKey) as IPlaceData

/**
 * Return cached location data for current session.
 *
 * @returns {IPlaceData} - Place Data.
 */
const getData = (): IPlaceData => {
	const cookieData = CookieStoreGet(cookieKey)

	const lsData = getLSData()

	if (!cookieData) return lsData

	if (lsData && lsData.city === cookieData) return lsData

	return {
		...LocationDefaultData,
		city: cookieData as string
	}
}

/**
 * Set cached location data for current session.
 *
 * @param {IPlaceData} data - Current Location Data.
 * @returns {void}
 */
const setData = (data: IPlaceData): void => {
	const cookieData = CookieStoreGet(cookieKey) as Nullable<string>
	if (!(cookieData && cookieData === data.city))
		CookieStoreSet(cookieKey, data.city, timeInDays)

	const lsData = LocalStoreGet(lsKey) as Nullable<IPlaceData>
	if (!(lsData && DeepEqual(lsData, data)))
		LocalStoreSet(lsKey, JSON.stringify(data), timeInDays)
}

/**
 * Set data to cache if global location changes.
 *
 * @param {CustomEvent} event - Global Location Change Event.
 * @returns {void}
 */
const handleLocationChange = (event: Event): void => {
	const customInput = event as CustomEvent

	const placeData = customInput.detail as IPlaceData

	setData(placeData)
}

/**
 * Adds event listener for global location change event.
 *
 * @returns {void}
 */
const load = (): void => {
	window.addEventListener(LocationChangeEvent, handleLocationChange)
}

export { load, getData }
