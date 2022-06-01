import { LoadResource, RESOURCE, ErrorHandler } from "../utils"
import { GetPlaceFromGeocode } from "./geocode"
import {
    TriggerLocalChange,
    TriggerGlobalChange,
    IsGlobalLocation
} from "../location"
import type IPlaceData from "../interface"

const style = "/themes/beta/css/elements/plugins/location/suggestions.css"

/**
 * Load css required for autocomplete.
 *
 * @returns {Promise<HTMLLinkElement>} Resolves to resource.
 */
const load = () => LoadResource(RESOURCE.CSS, style)

/**
 * Fetches predictions from google maps according to requests obj.
 *
 * @param {google.maps.places.AutocompletionRequest} request - Request obj from GetPlacePrediction Api.
 * @returns {Promise<google.maps.places.AutocompletionResponse>} Prediction Results.
 */
const GetPredictions = (request: google.maps.places.AutocompletionRequest) => {
    const autoCompleteService = new google.maps.places.AutocompleteService()

    return autoCompleteService.getPlacePredictions(request)
}

/**
 * Event handler for suggestions elements result click.
 *
 * @param {google.maps.GeocoderRequest} request - Request Obj.
 * @param { HTMLInputElement} inputEle - Current input element to which suggestions as bound.
 * @returns {void}
 */
const itemClickHandler = (
    request: google.maps.GeocoderRequest,
    inputEle: HTMLInputElement
): void => {
    GetPlaceFromGeocode(request)
        .then((placeData: IPlaceData) => {
            const isGlobal = IsGlobalLocation(inputEle)
            if (isGlobal) {
                TriggerGlobalChange(placeData)
            } else {
                TriggerLocalChange(placeData, inputEle)
            }
        })
        .catch(err => ErrorHandler.error(err))
}

export {
    load as LoadAutoComplete,
    GetPredictions as GetAutoCompletePredictions,
    itemClickHandler as HandlerAutoCompleteItemClick
}
