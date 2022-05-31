import { Debounce, ErrorHandler } from "../utils"
import { HideSuggestion, UpdateSuggestion } from "../suggestion"
import { GetAutoCompletePredictions } from "../map"
import { LocationAttributeSlug, LocationChangeEvent } from "../constant"
import IPlaceData, { BindInputFunc, UnbindInputFunc } from "../interface"

const DEBOUCE_TIMEOUT = 300 // in milliseconds

const typeAttrName = "type"
const selectorAttrName = "selector"

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

const PREDICTIONS_NOT_FOUND = "Predictions not found for given input value."

const ucwords = (string: string) =>
    string.replace(/\b[a-z]/g, letter => letter.toUpperCase())

const applyAttributes = (selector: string, isGlobal: boolean) => {
    const ele = document.querySelector(selector) as HTMLElement

    ele.setAttribute(LocationAttributeSlug, LocationAttributeSlug)

    ele.setAttribute(`${LocationAttributeSlug}-${selectorAttrName}`, selector)

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
    const element = event.target as HTMLInputElement
    const selector = element.getAttribute(
        `${LocationAttributeSlug}-${selectorAttrName}`
    ) as string
    const { value } = element
    HideSuggestion()
    if (value.length > 2) {
        GetAutoCompletePredictions({
            input: value,
            componentRestrictions: {
                country: "in"
            }
        })
            .then((data: google.maps.places.AutocompleteResponse) => {
                if (data?.predictions?.length) {
                    UpdateSuggestion(data.predictions, selector)
                } else {
                    ErrorHandler.info(PREDICTIONS_NOT_FOUND)
                }
            })
            .catch(err => ErrorHandler.error(err))
    }
}

const blurListener = (event: Event) => {
    const element = event.target as HTMLInputElement
    const selectedCity = element.getAttribute(dataAttrNames.city)

    if (!selectedCity || selectedCity !== element.value.toLowerCase()) {
        element.value = ""
    } else {
        element.value = ucwords(element.value)
    }
}

const changeInputAttributes = (
    element: HTMLInputElement,
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
    const element = event.target as HTMLInputElement

    const placeData = (event as CustomEvent).detail as IPlaceData

    changeInputAttributes(element, placeData)
}

const inputHandler = Debounce(inputListener, DEBOUCE_TIMEOUT)

const applyEvents = (selector: string, isGlobal: boolean) => {
    const ele = document.querySelector(selector) as HTMLInputElement
    // INPUT EVENT
    ele.addEventListener("input", inputHandler)

    // BLUR EVENT
    ele.addEventListener("blur", blurListener)

    // if location is global
    if (isGlobal) {
        ele.addEventListener(LocationChangeEvent, locationChangedListener)
    }
}

const bind: BindInputFunc = (selector: string, isGlobal: boolean): void => {
    const ele = document.querySelector(selector)

    if (!ele) {
        return
    }

    applyAttributes(selector, isGlobal)
    applyEvents(selector, isGlobal)
}

const isGlobal = (ele: HTMLInputElement) => {
    const typeAttr = ele.getAttribute(
        `${LocationAttributeSlug}-${typeAttrName}`
    )

    return typeAttr === pluginType.GLOBAL
}

const unbind: UnbindInputFunc = (element: HTMLInputElement): void => {
    // INPUT EVENT
    element.removeEventListener("input", inputHandler)

    // BLUR EVENT
    element.removeEventListener("blur", blurListener)

    // if location is global
    if (isGlobal(element)) {
        element.removeEventListener(
            LocationChangeEvent,
            locationChangedListener
        )
    }

    if (element.hasAttribute(LocationAttributeSlug)) {
        element.removeAttribute(LocationAttributeSlug)
    }

    if (element.hasAttribute(`${LocationAttributeSlug}-${typeAttrName}`)) {
        element.removeAttribute(`${LocationAttributeSlug}-${typeAttrName}`)
    }
}

export { bind as BindInput, unbind as UnbindInput }
