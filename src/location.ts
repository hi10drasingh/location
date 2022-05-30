import { DeepEqual } from "./utils"
import IPlaceData from "./interface"
import { LocationChangeEvent, LocationAttributeSlug } from "./constant"

let placeData: IPlaceData

const GetAllInput = (): NodeListOf<HTMLInputElement> =>
    document.querySelectorAll(
        `input[${LocationAttributeSlug}="${LocationAttributeSlug}"]`
    )

const emitEvent = (details: IPlaceData) => {
    const event = new CustomEvent(LocationChangeEvent, {
        bubbles: false,
        detail: details
    })

    // Emit event to all plugin inputs
    const inputs = GetAllInput()
    inputs.forEach(input => {
        input.dispatchEvent(event)
    })

    // Emitting to window
    window.dispatchEvent(event)
}

const triggerChange = (newPlaceData: IPlaceData): void => {
    if (!newPlaceData) return

    if (placeData && DeepEqual(newPlaceData, placeData)) return

    placeData = newPlaceData

    emitEvent(placeData)
}

export default triggerChange
