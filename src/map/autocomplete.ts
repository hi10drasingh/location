import { LoadResource, RESOURCE, ErrorHandler } from "../utils"
import { GetPlaceFromGeocode } from "./geocode"
import {
    TriggerLocalChange,
    TriggerGlobalChange,
    IsGlobalLocation
} from "../location"
import type IPlaceData from "../interface"

const style = "/themes/beta/css/elements/plugins/location/suggestions.css"

const load = () => LoadResource(RESOURCE.CSS, style)

const GetPredictions = (request: google.maps.places.AutocompletionRequest) => {
    const autoCompleteService = new google.maps.places.AutocompleteService()

    return autoCompleteService.getPlacePredictions(request)
}

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
