import { LoadResource, RESOURCE } from "../utils"
import { LoadSuggestion } from "."

const style = "/themes/beta/css/elements/plugins/location/suggestions.css"

export type MatchedSubstring = { length: number; offset: number }

export type StructuredFormatting = {
    main_text: string
    main_text_matched_substrings: MatchedSubstring[]
    secondary_text?: string
    secondary_text_matched_substrings?: MatchedSubstring[]
}

export interface IPrediction {
    place_id: string
    structured_formatting: StructuredFormatting
}

const getPlacePredictions: (a: any, b: any) => void = () => {
    return new window.google.maps.places.AutocompleteService()
        .getPlacePredictions
}

const load = async () => {
    await LoadResource(RESOURCE.CSS, style)
    LoadSuggestion()
}

export { load, getPlacePredictions }
