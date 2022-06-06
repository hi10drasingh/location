import { CookieStoreGet, ErrorHandler, HTTPClient } from "../utils"
import { IPlaceData, Nullable, DroomResponse, DroomWindow } from "../interface"
import { LocationChangeEvent } from "../constant"

const droomWindow = window as Window as DroomWindow

/**
 * User Location Api Result Format.
 */
interface UserLocationResponse extends DroomResponse {
	/**
	 * Data is null or in place data format.
	 */
	data: Nullable<IPlaceData>
}

const URL = "/user/location"

/**
 * Fetched user location from api.
 *
 * @returns {Promise<Nullable<IPlaceData>>} - User location data.
 */
const getUserLocation = (): Promise<Nullable<IPlaceData>> =>
	new Promise<Nullable<IPlaceData>>((resolve, reject) => {
		if (!droomWindow.auth) resolve(null)
		HTTPClient<UserLocationResponse>(URL, {
			headers: {
				"X-Requested-With": "XMLHttpRequest"
			}
		})
			.then((res: UserLocationResponse) =>
				resolve(res.data ? res.data : null)
			)
			.catch(err => reject(err))
	})

/**
 * Set user location to api.
 *
 * @param {IPlaceData} data - Location Data to save.
 * @returns {void}
 */
const setUserLocation = (data: IPlaceData): void => {
	if (!droomWindow.auth) return
	const csrfToken = CookieStoreGet("XSRF-TOKEN") as string

	HTTPClient(URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"X-Requested-With": "XMLHttpRequest",
			...(csrfToken && {
				"X-XSRF-TOKEN": decodeURIComponent(csrfToken)
			})
		},
		body: JSON.stringify(data)
	}).catch((err: string) => ErrorHandler.error(err))
}

/**
 * Set User Location is global location changes.
 *
 * @param {Event} event - Global Location Change Event.
 * @returns {void}
 */
const handleLocationChange = (event: Event): void => {
	const customInput = event as CustomEvent

	const placeData = customInput.detail as IPlaceData

	setUserLocation(placeData)
}

/**
 * Registers event listener to handle global location change.
 *
 * @returns {void}
 */
const load = (): void => {
	window.addEventListener(LocationChangeEvent, handleLocationChange)
}

export {
	load as LoadUserStore,
	getUserLocation as GetUserLocation,
	setUserLocation as SetUserLocation
}
