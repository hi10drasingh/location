import { getAll as GetAllInput } from "./input"
import { DeepEqual } from "../utils"
import { IPlaceData } from "../interface"
import { attributeSlug, changeEventName, defaultPlaceData } from "./constant"

let placeData: IPlaceData

const emitEvent = (details: IPlaceData) => {
    const event = new CustomEvent(changeEventName, {
        bubbles: false,
        detail: details
    })

    // Emit event to all plugin inputs
    GetAllInput().forEach(input => {
        input.dispatchEvent(event)
    })

    // Emitting to window
    window.dispatchEvent(event)
}

const triggerChange = (newPlaceData: IPlaceData) => {
    if (!newPlaceData) return

    if (placeData && DeepEqual(newPlaceData, placeData)) return

    placeData = newPlaceData

    emitEvent(placeData)
}

export {
    changeEventName,
    attributeSlug,
    defaultPlaceData,
    triggerChange,
    type IPlaceData
}
