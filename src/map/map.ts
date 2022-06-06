import IPlaceData from "../interface"
import { LocationDefaultData } from "../constant"

/**
 * Result format of geocoder or place detail api.
 */
type Result = google.maps.GeocoderResult | google.maps.places.PlaceResult

/**
 * Processes address component of maps result into palce data.
 *
 * @param {google.maps.GeocoderAddressComponent[]} addressComponent - Place Address Component.
 * @param {IPlaceData} placeData - PlaceData Obj.
 * @returns {IPlaceData} ProcessedPlaceData.
 */
const processAddressComponent = (
	addressComponent: google.maps.GeocoderAddressComponent[],
	placeData: IPlaceData
) => {
	let [locality, subLocalityExist] = ["", false]
	const data = { ...placeData }

	addressComponent.forEach(component => {
		if (component.types.includes("sublocality")) subLocalityExist = true

		if (component.types[0] === "locality") {
			locality = component.long_name.toLowerCase()
		}
		if (component.types[0] === "administrative_area_level_2") {
			data.city = component.long_name.toLowerCase()
		}
		if (component.types[0] === "administrative_area_level_1") {
			data.state = component.long_name.toLowerCase()
		}
		if (component.types[0] === "postal_code") {
			data.pincode = component.long_name
		}
	})

	return {
		...data,
		...((subLocalityExist || !data.city) && { city: locality })
	}
}

/**
 * Processes result of geocode and autocomplete predictions to IPlacedata.
 *
 * @param {Result} result - Place result.
 * @returns {IPlaceData} PlaceData.
 */
const processResult = (result: Result): IPlaceData => {
	const placeData = { ...LocationDefaultData }

	if (result?.geometry?.location) {
		placeData.lat = result.geometry.location.lat()
		placeData.lng = result.geometry.location.lng()
	}

	if (result?.place_id) {
		placeData.place_id = result.place_id
	}

	if (result?.formatted_address) {
		placeData.address = result.formatted_address
	}

	if (result?.address_components) {
		return processAddressComponent(result.address_components, placeData)
	}

	return placeData
}

export { processResult, type Result }
