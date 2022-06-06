import {
	LocationChangeEvent,
	LocationAttrSlug,
	LocationTypeAttrName,
	LocationPluginTypes,
	LocationPopularCityStateMap
} from "./constant"
import { IPlaceData, Nullable } from "./interface"

/**
 * List of all inputs which are registered as global.
 *
 * @returns {NodeListOf<HTMLInputElement>} - List of all global input.
 */
const GetGlobalInput = (): NodeListOf<HTMLInputElement> => {
	const globalInput = document.querySelectorAll(
		`input[${LocationAttrSlug}-${LocationTypeAttrName}="${LocationPluginTypes.GLOBAL}"]`
	)

	return globalInput as NodeListOf<HTMLInputElement>
}

/**
 * Returns state crossponsing to city listed in popular ciites block.
 *
 * @param {string} city - City Name.
 * @returns {string | null} - State Name.
 */
const getState = (city: string): Nullable<string> => {
	if (!city) return null

	return LocationPopularCityStateMap[city] || null
}

/**
 * Emits Custom Event to all items with given details.
 *
 * @param {IPlaceData} detail - New Place Data.
 * @param {Array<HTMLInputElement | Window>} items - List of element for which evit needs to be triggered.
 * @returns {void}
 */
const emitEvent = (
	detail: IPlaceData,
	items: Array<HTMLInputElement | Window>
): void => {
	// Know issues handled
	const city = detail.city
		.replace("new delhi", "delhi")
		.replace("gurugram", "gurgaon")
		.replace("noida", "gautam buddh nagar")
		.replace("sarhol", "gurgaon")
		.replace("prayagraj", "allahabad")
		.replace("bangalore urban", "bengaluru")

	const placeData = {
		...detail,
		city,
		state: detail.state ? detail.state : getState(city)
	}

	const event = new CustomEvent(LocationChangeEvent, {
		bubbles: false,
		detail: placeData
	})

	items.forEach(input => {
		input.dispatchEvent(event)
	})
}

/**
 * Triggers Location change for all global inputs.
 *
 * @param {IPlaceData} newPlaceData - New Place Data.
 * @returns {void}
 */
const triggerChange = (newPlaceData: IPlaceData): void => {
	if (!newPlaceData) return

	// Emit event to all plugin inputs
	const inputs = GetGlobalInput()

	const items = Array.from(inputs)

	emitEvent(newPlaceData, [...items, window])
}

/**
 * Trigger Location Change for local inputs.
 *
 * @param {IPlaceData} newPlaceData - New place data.
 * @param {HTMLInputElement} inputEle - Input for which change will be triggered.
 * @returns {void}
 */
const triggerLocalChange = (
	newPlaceData: IPlaceData,
	inputEle: HTMLInputElement
): void => {
	if (!newPlaceData) return
	emitEvent(newPlaceData, [inputEle])
}

/**
 * Check if given input is registers as global not not.
 *
 * @param {HTMLInputElement} ele - Input element to be checked for global.
 * @returns {boolean} - Is global or not.
 */
const isGlobal = (ele: HTMLInputElement): boolean => {
	const typeAttr = ele.getAttribute(
		`${LocationAttrSlug}-${LocationTypeAttrName}`
	)

	return typeAttr === LocationPluginTypes.GLOBAL
}

export {
	triggerChange as TriggerGlobalChange,
	triggerLocalChange as TriggerLocalChange,
	isGlobal as IsGlobalLocation
}
