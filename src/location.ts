import IPlaceData from "./interface"
import {
    LocationChangeEvent,
    LocationAttrSlug,
    LocationTypeAttrName,
    LocationPluginTypes
} from "./constant"

let placeData: IPlaceData

/**
 * List of all inputs which are registered as global.
 *
 * @returns {NodeListOf<HTMLInputElement>} - List of all global input.
 */
const GetGlobalInput = (): NodeListOf<HTMLInputElement> =>
    document.querySelectorAll(
        `input[${LocationAttrSlug}-${LocationTypeAttrName}="${LocationPluginTypes.GLOBAL}"]`
    )

/**
 * Emits Custom Event to all items with given details.
 *
 * @param {IPlaceData} details - New Place Data.
 * @param {Array<HTMLInputElement | Window>} items - List of element for which evit needs to be triggered.
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
 * @param {IPlaceData} newPlaceData -.
 */
const triggerChange = (newPlaceData: IPlaceData): void => {
    if (!newPlaceData) return

    placeData = newPlaceData

    // Emit event to all plugin inputs
    const inputs = GetGlobalInput()

    const items = Array.from(inputs)

    emitEvent(placeData, [...items, window])
}

/**
 * Trigger Location Change for local inputs.
 *
 * @param {IPlaceData} newPlaceData - New place data.
 * @param {HTMLInputElement} inputEle - Input for which change will be triggered.
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
