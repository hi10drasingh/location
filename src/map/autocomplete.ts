import { LoadResource, RESOURCE } from "../utils"

const style = "/themes/beta/css/elements/plugins/location/suggestions.css"

const load = () => LoadResource(RESOURCE.CSS, style)

const GetPredictions = (request: google.maps.places.AutocompletionRequest) => {
    const autoCompleteService = new google.maps.places.AutocompleteService()

    return autoCompleteService.getPlacePredictions(request)
}

export {
    load as LoadAutoComplete,
    GetPredictions as GetAutoCompletePredictions
}
