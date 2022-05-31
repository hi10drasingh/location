import { Debounce, ErrorHandler } from "../utils"
import { HideSuggestion, UpdateSuggestion } from "../suggestion"
import { GetAutoCompletePredictions } from "../map"
import {
    LocationAttrSlug,
    LocationChangeEvent,
    LocationTypeAttrName,
    LocationInputSelectorAttrName,
    LocationPluginTypes,
    LocationDataAttrList
} from "../constant"
import IPlaceData, { BindInputFunc, UnbindInputFunc } from "../interface"
import { IsGlobalLocation } from "../location"

const DEBOUCE_TIMEOUT = 300 // in milliseconds

const PREDICTIONS_NOT_FOUND = "Predictions not found for given input value."

const ucwords = (string: string) =>
    string.replace(/\b[a-z]/g, letter => letter.toUpperCase())

const applyAttributes = (selector: string, isGlobal: boolean) => {
    const ele = document.querySelector(selector) as HTMLElement

    ele.setAttribute(LocationAttrSlug, LocationAttrSlug)

    ele.setAttribute(
        `${LocationAttrSlug}-${LocationInputSelectorAttrName}`,
        selector
    )

    if (isGlobal) {
        ele.setAttribute(
            `${LocationAttrSlug}-${LocationTypeAttrName}`,
            LocationPluginTypes.GLOBAL
        )
    } else {
        ele.setAttribute(
            `${LocationAttrSlug}-${LocationTypeAttrName}`,
            LocationPluginTypes.LOCAL
        )
    }
}

const inputListener = (event: Event) => {
    const element = event.target as HTMLInputElement
    const selector = element.getAttribute(
        `${LocationAttrSlug}-${LocationInputSelectorAttrName}`
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
    const selectedCity = element.getAttribute(LocationDataAttrList.city)

    if (!selectedCity || selectedCity !== element.value.toLowerCase()) {
        element.value = ""
    } else {
        element.value = ucwords(element.value)
    }
    HideSuggestion()
}

const changeInputAttributes = (
    element: HTMLInputElement,
    placeData: IPlaceData
) => {
    const input = element
    input.value = ucwords(placeData.city)

    Object.values(LocationDataAttrList).forEach(key => {
        const value = placeData[key]
        if (!value) return
        element.setAttribute(`${LocationAttrSlug}-${key}`, value.toString())
    })
}

const locationChangedListener = (event: Event) => {
    const element = event.target as HTMLInputElement

    const placeData = (event as CustomEvent).detail as IPlaceData

    changeInputAttributes(element, placeData)
}

const inputHandler = Debounce(inputListener, DEBOUCE_TIMEOUT)

const applyEvents = (selector: string) => {
    const ele = document.querySelector(selector) as HTMLInputElement
    // INPUT EVENT
    ele.addEventListener("input", inputHandler)

    // BLUR EVENT
    ele.addEventListener("blur", blurListener)

    // if location is global
    ele.addEventListener(LocationChangeEvent, locationChangedListener)
}

const bind: BindInputFunc = (selector: string, isGlobal: boolean): void => {
    const ele = document.querySelector(selector)

    if (!ele) {
        return
    }

    applyAttributes(selector, isGlobal)
    applyEvents(selector)
}

const unbind: UnbindInputFunc = (element: HTMLInputElement): void => {
    // INPUT EVENT
    element.removeEventListener("input", inputHandler)

    // BLUR EVENT
    element.removeEventListener("blur", blurListener)

    // if location is global
    if (IsGlobalLocation(element)) {
        element.removeEventListener(
            LocationChangeEvent,
            locationChangedListener
        )
    }

    if (element.hasAttribute(LocationAttrSlug)) {
        element.removeAttribute(LocationAttrSlug)
    }

    if (element.hasAttribute(`${LocationAttrSlug}-${LocationTypeAttrName}`)) {
        element.removeAttribute(`${LocationAttrSlug}-${LocationTypeAttrName}`)
    }
}

export { bind as BindInput, unbind as UnbindInput }
