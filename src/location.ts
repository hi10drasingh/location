import { DeepEqual } from "./utils"
import IPlaceData from "./interface"
import {
    LocationChangeEvent,
    LocationAttrSlug,
    LocationTypeAttrName,
    LocationPluginTypes
} from "./constant"

let placeData: IPlaceData

const GetGlobalInput = (): NodeListOf<HTMLInputElement> =>
    document.querySelectorAll(
        `input[${LocationAttrSlug}-${LocationTypeAttrName}="${LocationPluginTypes.GLOBAL}"]`
    )

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

const triggerChange = (newPlaceData: IPlaceData): void => {
    if (!newPlaceData) return

    if (placeData && DeepEqual(newPlaceData, placeData)) return

    placeData = newPlaceData

    // Emit event to all plugin inputs
    const inputs = GetGlobalInput()

    const items = Array.from(inputs)

    emitEvent(placeData, [...items, window])
}

const triggerLocalChange = (
    newPlaceData: IPlaceData,
    inputEle: HTMLInputElement
): void => {
    if (!newPlaceData) return
    emitEvent(newPlaceData, [inputEle])
}

const isGlobal = (ele: HTMLInputElement) => {
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
