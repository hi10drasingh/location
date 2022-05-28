import { load as LoadMap } from "./map"
import { load as LoadAutoComplete } from "./autocomplete"
import {
    hide as HideSuggestion,
    show as ShowSuggestion,
    load as LoadSuggestion
} from "./suggestion"
import { GetCurrentLocation } from "./geocode"

const load = () =>
    new Promise<void>((resolve, reject) => {
        LoadMap()
            .then(() =>
                LoadAutoComplete()
                    .then(() => {
                        LoadSuggestion()
                        resolve()
                    })
                    .catch(err => reject(err))
            )
            .catch(err => reject(err))
    })

export {
    GetCurrentLocation,
    ShowSuggestion,
    HideSuggestion,
    load as LoadGoogleMaps
}
