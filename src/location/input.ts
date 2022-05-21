import { Debounce } from "../utils"
import {
    HideSuggestion,
    GetAutoCompletePrediction,
    UpdateSuggestion
} from "../map"
import { LocationChangeEvent, LocationAttributeSlug } from "."
import { IPlaceData } from "../interface"

const DEBOUCE_TIMEOUT = 300 // in milliseconds

type Listener = {
    [key: string]: (event: Event) => void
}

interface CustomHTMLInputElement extends HTMLInputElement {
    listeners: Listener[]
}

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

const ucwords = (string: string) =>
    string.replace(/\b[a-z]/g, letter => letter.toUpperCase())

const applyAttributes = (ele: CustomHTMLInputElement, isGlobal: boolean) => {
    ele.setAttribute(LocationAttributeSlug, LocationAttributeSlug)

    if (isGlobal) {
        ele.setAttribute(
            `${LocationAttributeSlug}-${typeAttrName}`,
            pluginType.GLOBAL
        )
    } else {
        ele.setAttribute(
            `${LocationAttributeSlug}-${typeAttrName}`,
            pluginType.LOCAL
        )
    }
}

const inputListener = (event: Event) => {
    const element = <CustomHTMLInputElement>event.currentTarget
    const { value } = element
    HideSuggestion()
    if (value.length > 2) {
        GetAutoCompletePrediction(
            {
                input: value,
                componentRestrictions: {
                    country: "in"
                }
            },
            UpdateSuggestion
        )
    }
}

const blurListener = (event: Event) => {
    const element = <CustomHTMLInputElement>event.currentTarget
    const selectedCity = element.getAttribute(dataAttrNames.city)

    if (!selectedCity || selectedCity !== element.value.toLowerCase()) {
        element.value = ""
    } else {
        element.value = ucwords(element.value)
    }
}

const changeInputAttributes = (
    element: CustomHTMLInputElement,
    placeData: IPlaceData
) => {
    const input = element
    input.value = ucwords(placeData.city)

    Object.values(dataAttrNames).forEach(key => {
        const value = placeData[key]
        if (!value) return
        element.setAttribute(
            `${LocationAttributeSlug}-${key}`,
            value.toString()
        )
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

    // if location is global
    if (isGlobal) {
        ele.addEventListener(LocationChangeEvent, locationChangedListener)
        ele.listeners.push({ LocationChangeEvent: locationChangedListener })
    }
}

const bind = (element: HTMLInputElement, isGlobal: boolean) => {
    const customInput = <CustomHTMLInputElement>element
    applyAttributes(customInput, isGlobal)
    applyEvents(customInput, isGlobal)
}

const getAll = () =>
    document.querySelectorAll(
        `input[${applyAttributes}="${applyAttributes}"]`
    ) as NodeListOf<CustomHTMLInputElement>

export { bind, getAll }
