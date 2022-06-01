import IPlaceData from "./interface"
import {
    LocationChangeEvent,
    LocationAttrSlug,
    LocationTypeAttrName,
    LocationPluginTypes
} from "./constant"

/**
 * List of all inputs which are registered as global.
 *
 * @returns {NodeListOf<HTMLInputElement>} - List of all global input.
 */
const GetGlobalInput = () => {
    const globalInput = document.querySelectorAll(
        `input[${LocationAttrSlug}-${LocationTypeAttrName}="${LocationPluginTypes.GLOBAL}"]`
    )

    return globalInput
}

/**
 * Emits Custom Event to all items with given details.
 *
 * @param {IPlaceData} details - New Place Data.
 * @param {Array<HTMLInputElement | Window>} items - List of element for which evit needs to be triggered.
 * @returns {void}
 */
const emitEvent = (
    details: IPlaceData,
    items: Array<HTMLInputElement | Window>
) => {
    const event = new CustomEvent(LocationChangeEvent, {
        bubbles: false,
        detail: details
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

    // Know issues handled
    newPlaceData.city
        .replace("new delhi", "delhi")
        .replace("gurugram", "gurgaon")
        .replace("noida", "gautam buddh nagar")
        .replace("sarhol", "gurgaon")
        .replace("prayagraj", "allahabad")
        .replace("bangalore urban", "bengaluru")

    // Emit event to all plugin inputs
    const inputs = GetGlobalInput()

    const items = Array.from(inputs) as HTMLInputElement[]

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
