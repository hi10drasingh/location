import { Debounce } from "../utils"
import { HideSuggestion, GetAutoCompletePrediction } from "../map"
import { IPlaceData } from "."

const DEBOUCE_TIMEOUT = 300 // in milliseconds

type listener = {
    [key: string]: Function
}

interface CustomHTMLInputElement extends HTMLInputElement {
    listeners: listener[]
}

const attributeSlug = "locationplugin"

const typeAttrName = "type"

const pluginType = {
    GLOBAL: "global",
    LOCAL: "local"
}

const dataAttrNames = {
    lat: "lat",
    lng: "lng",
    city: "city",
    state: "state",
    country: "country",
    address: "address",
    pincode: "pincode",
    placeId: "place_id"
}

const ucwords = (string: string) => {
    return string.replace(/\b[a-z]/g, letter => {
        return letter.toUpperCase()
    })
}

const applyAttributes = (ele: CustomHTMLInputElement, isGlobal: boolean) => {
    ele.setAttribute(attributeSlug, attributeSlug)

    if (isGlobal) {
        ele.setAttribute(`${attributeSlug}-${typeAttrName}`, pluginType.GLOBAL)
    } else {
        ele.setAttribute(`${attributeSlug}-${typeAttrName}`, pluginType.LOCAL)
    }
}

const inputListener = (event: Event) => {
    const element = <CustomHTMLInputElement>event.currentTarget
    const value = element.value
    HideSuggestion()
    if (value.length > 2) {
        GetAutoCompletePrediction(
            {
                input: value,
                componentRestrictions: {
                    country: "in"
                }
            }
            self.displaySuggestions.bind(this)
        )
    }
}

const blurListener = (event: Event) => {
    const element = <CustomHTMLInputElement>event.currentTarget
    let selectedCity = element.getAttribute(dataAttrNames.city)

    if (!selectedCity || selectedCity != element.value.toLowerCase()) {
        element.value = ""
    } else {
        element.value = ucwords(element.value)
    }
}

const changeInputAttributes = (
    element: CustomHTMLInputElement,
    placeData: IPlaceData
) => {
    element.value = ucwords(placeData.city)

    Object.values(dataAttrNames).forEach(key => {
        const value = placeData[key]
        if (!value) return
        element.setAttribute(`${attributeSlug}-${key}`, value.toString())
    })
}

const locationChangedListener = (event: Event) => {
    const element = <CustomHTMLInputElement>event.currentTarget

    const placeData = <IPlaceData>(<CustomEvent>event).detail

    changeInputAttributes(element, placeData)
}

const applyEvents = (ele: CustomHTMLInputElement, isGlobal: boolean) => {
    // INPUT EVENT
    const inputHandler = Debounce(inputListener, DEBOUCE_TIMEOUT)
    ele.addEventListener("input", inputHandler)
    ele.listeners.push({ input: inputHandler })

    // BLUR EVENT
    ele.addEventListener("blur", blurListener)
    ele.listeners.push({ blur: blurListener })

    //if location is global
    if (isGlobal) {
        ele.addEventListener("locationchanged", locationChangedListener)
        ele.listeners.push({ locationchanged: locationChangedListener })
    }
}

const bind = (element: HTMLInputElement, isGlobal: boolean) => {
    let customInput = <CustomHTMLInputElement>element
    applyAttributes(customInput, isGlobal)
    applyEvents(customInput, isGlobal)
}

export { bind }
