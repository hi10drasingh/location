import { GetAllInput } from "."
import { DeepEqual } from "../utils"
import { IPlaceData } from "../interface"

const attributeSlug = "locationplugin"

const changeEventName = "locationchanged"

const defaultPlaceData: IPlaceData = {
    lat: null,
    lng: null,
    city: "",
    state: null,
    pincode: null,
    place_id: null,
    country: "india",
    address: null
}

let placeData: IPlaceData

const triggerChange = (newPlaceData: IPlaceData) => {
    if (!newPlaceData) return

    if (placeData && DeepEqual(newPlaceData, placeData)) return

    placeData = newPlaceData

    emitEvent(placeData)
}

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

export {
    changeEventName,
    attributeSlug,
    defaultPlaceData,
    triggerChange,
    type IPlaceData
}
