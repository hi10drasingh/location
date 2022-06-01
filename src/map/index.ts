import { load as LoadMap } from "./map"
import {
    LoadAutoComplete,
    GetAutoCompletePredictions,
    HandlerAutoCompleteItemClick
} from "./autocomplete"
import { GetCurrentLocation } from "./geocode"

/**
 * Loads map dependencies then autocomplete then resolves.
 */
const load = () =>
    new Promise<void>((resolve, reject) => {
        LoadMap()
            .then(() =>
                LoadAutoComplete()
                    .then(() => resolve())
                    .catch(err => reject(err))
            )
            .catch(err => reject(err))
    })

export {
    GetCurrentLocation,
    load as LoadGoogleMaps,
    GetAutoCompletePredictions,
    HandlerAutoCompleteItemClick
}
