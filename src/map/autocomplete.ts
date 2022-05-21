import { LoadResource, RESOURCE } from "../utils"
import { LoadSuggestion } from "."

const style = "/themes/beta/css/elements/plugins/location/suggestions.css"

const getPlacePredictions: (a: any, b: any) => void = () => {
    return new window.google.maps.places.AutocompleteService()
        .getPlacePredictions
}

const load = async () => {
    await LoadResource(RESOURCE.CSS, style)
    LoadSuggestion()
}

export { load, getPlacePredictions }
