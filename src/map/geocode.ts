import { IPlaceData } from "../interface"
import { TriggerGlobalChange } from "../location"
import { processResult } from "./map"

const GEOLOCATION_NOT_AVAILABLE_MSG =
	"Geolocation is not available for this browser"

/**
 * Fetches and process the result from geocode to IPlaceData.
 *
 * @param {google.maps.GeocoderRequest} request - Request Obj.
 * @returns {Promise<IPlaceData>} - Geocode Result converted to place data format.
 */
const GetPlaceFromGeocode = (
	request: google.maps.GeocoderRequest
): Promise<IPlaceData> => {
	const geocoder = new window.google.maps.Geocoder()

	return geocoder
		.geocode(request)
		.then((res: google.maps.GeocoderResponse) => {
			if (!res.results?.[0]) {
				throw new Error("No geocode results found.")
			}
			return processResult(res.results[0])
		})
}

/**
 * Fetches current location of user via navigation and geocode api.
 *
 * @returns {Promise<void>} - Void Promise.
 */
const GetCurrentLocation = () => {
	const promise = new Promise<void>((resolve, reject) => {
		if (!navigator?.geolocation) {
			reject(new Error(GEOLOCATION_NOT_AVAILABLE_MSG))
		}

		navigator.geolocation.getCurrentPosition(
			currentPosition => {
				GetPlaceFromGeocode({
					location: {
						lat: currentPosition.coords.latitude,
						lng: currentPosition.coords.longitude
					}
				})
					.then(placeData => {
						TriggerGlobalChange(placeData)
						resolve()
					})
					.catch(err => reject(err))
			},
			err => reject(err)
		)
	})

	return promise
}

export { GetPlaceFromGeocode, GetCurrentLocation }
