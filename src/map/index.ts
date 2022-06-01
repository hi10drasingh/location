import { load as LoadMap } from "./map"
import {
    LoadAutoComplete,
    GetAutoCompletePredictions,
    HandlerAutoCompleteItemClick
} from "./autocomplete"
import { GetCurrentLocation } from "./geocode"

/**
 * Loads map dependencies then autocomplete then resolves.
 *
 * @returns {Promise<void>} - Map dependencies load promise.
 */
const load = () => {
    const promise = new Promise<void>((resolve, reject) => {
        LoadMap()
            .then(() =>
                LoadAutoComplete()
                    .then(() => resolve())
                    .catch(err => reject(err))
            )
            .catch(err => reject(err))
    })

    return promise
}

export {
    GetCurrentLocation,
    load as LoadGoogleMaps,
    GetAutoCompletePredictions,
    HandlerAutoCompleteItemClick
}
