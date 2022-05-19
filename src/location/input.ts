import { Debounce } from "../utils"
import { HideSuggestion } from "../map"

const DEBOUCE_TIMEOUT = 300 // in milliseconds

type listener = {
    [key: string]: Function
}

interface CustomHTMLInputElement extends HTMLInputElement {
    listeners: listener[]
}

const attributeSlug = "locationplugin"

const globalAttrName = `${attributeSlug}-global`

const applyAttributes = (ele: CustomHTMLInputElement, isGlobal: boolean) => {
    ele.setAttribute(attributeSlug, attributeSlug)
    if (isGlobal) ele.setAttribute(globalAttrName, globalAttrName)
}

const inputListener = (event: Event) => {
    const element = <CustomHTMLInputElement>event.currentTarget
    let autocompleteService =
        new window.google.maps.places.AutocompleteService()
    let value = element.value
    HideSuggestion()
    if (value.length > 2) {
        autocompleteService.getPlacePredictions(
            {
                input: value,
                componentRestrictions: {
                    country: "in"
                }
            }
            // self.displaySuggestions.bind(this)
        )
    }
}

const blurListener = (event: Event) => {
    const element = <CustomHTMLInputElement>event.currentTarget
    let selectedCity = element.getAttribute("city")

    if (!selectedCity || selectedCity != element.value.toLowerCase()) {
        element.value = ""
    } else {
        element.value = element.value.replace(/\b[a-z]/g, function (letter) {
            return letter.toUpperCase()
        })
    }
}

const locationChangedListener = (event: Event) => {
    const element = <CustomHTMLInputElement>event.currentTarget
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
