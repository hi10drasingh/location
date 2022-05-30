import { Debounce, ErrorHandler } from "../utils"
import { HideSuggestion, UpdateSuggestion } from "../suggestion"
import { GetAutoCompletePredictions } from "../map"
import { LocationAttributeSlug, LocationChangeEvent } from "../constant"
import IPlaceData, {
    type CustomHTMLInputElement,
    Listener,
    BindInputFunc,
    UnbindInputFunc
} from "../interface"

const DEBOUCE_TIMEOUT = 300 // in milliseconds

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

const PREDICTIONS_NOT_FOUND = "Predictions not found for given input value."

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
    const element = event.currentTarget as CustomHTMLInputElement
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
                    UpdateSuggestion(data.predictions, element)
                } else {
                    ErrorHandler.info(PREDICTIONS_NOT_FOUND)
                }
            })
            .catch(err => ErrorHandler.error(err))
    }
}

const blurListener = (event: Event) => {
    const element = event.currentTarget as CustomHTMLInputElement
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
    const element = event.currentTarget as CustomHTMLInputElement

    const placeData = (event as CustomEvent).detail as IPlaceData

    changeInputAttributes(element, placeData)
}

const applyEvents = (ele: CustomHTMLInputElement, isGlobal: boolean) => {
    // INPUT EVENT
    const inputHandler = (event: Event) =>
        Debounce(inputListener, DEBOUCE_TIMEOUT)(event)
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

const bind: BindInputFunc = (
    element: HTMLInputElement,
    isGlobal: boolean
): void => {
    const customInput = element as CustomHTMLInputElement
    applyAttributes(customInput, isGlobal)
    applyEvents(customInput, isGlobal)
}

const unbind: UnbindInputFunc = (element: CustomHTMLInputElement): void => {
    element.listeners.forEach((val: Listener) => {
        Object.entries(val).forEach(([eventName, cb]) => {
            element.removeEventListener(eventName, cb)
        })
    })

    if (element.hasAttribute(LocationAttributeSlug)) {
        element.removeAttribute(LocationAttributeSlug)
    }

    if (element.hasAttribute(`${LocationAttributeSlug}-${typeAttrName}`)) {
        element.removeAttribute(`${LocationAttributeSlug}-${typeAttrName}`)
    }
}

export { bind as BindInput, unbind as UnbindInput }
