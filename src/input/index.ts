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

/**
 * Converts first letter of each word to capital.
 *
 * @param {string} string - String to be converted.
 * @returns {string} ModifiedString.
 */
const ucwords = (string: string) =>
    string.replace(/\b[a-z]/g, letter => letter.toUpperCase())

/**
 * Add Location Plugin Attributes to Input.
 *
 * @param {string} selector - Input Ele Selector.
 * @param {boolean} isGlobal - Is Location Global.
 */
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

/**
 * On Input Event Listener, which updates prediction on input after debounced delay.
 *
 * @param {Event} event - Input Event.
 */
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

/**
 * On Blur Event Listener, Hide Suggestion and reset current input value is type value is not same.
 * Added by requirements team.
 *
 * @param {Event} event - Blur Event.
 */
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

/**
 * Change input attribute on location change event. Add all place data element value and keys to input attr.
 *
 * @param {HTMLInputElement} element - Input Element.
 * @param {IPlaceData} placeData - Location Change Data.
 */
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

/**
 * On LocationChange Event Listener, adds all relevant attributes to input.
 *
 * @param {Event} event - LocationChange Event.
 */
const locationChangedListener = (event: Event) => {
    const element = event.target as HTMLInputElement

    const placeData = (event as CustomEvent).detail as IPlaceData

    changeInputAttributes(element, placeData)
}

const inputHandler = Debounce(inputListener, DEBOUCE_TIMEOUT)

/**
 * Apply listeners for input , blur & location change event.
 *
 * @param {string} selector - Input element selector.
 */
const applyEvents = (selector: string) => {
    const ele = document.querySelector(selector) as HTMLInputElement
    // INPUT EVENT
    ele.addEventListener("input", inputHandler)

    // BLUR EVENT
    ele.addEventListener("blur", blurListener)

    // if location is global
    ele.addEventListener(LocationChangeEvent, locationChangedListener)
}

/**
 * Bind Location Plugin to a input element.
 *
 * @param {string} selector - Input element selector.
 * @param {boolean} isGlobal - Is Location Global.
 */
const bind: BindInputFunc = (selector: string, isGlobal: boolean): void => {
    const ele = document.querySelector(selector)

    if (!ele) {
        return
    }

    applyAttributes(selector, isGlobal)
    applyEvents(selector)
}

/**
 * UnBind Location Plugin to a input element.
 *
 * @param {HTMLInputElement} element - Input element.
 */
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
