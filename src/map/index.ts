import { load as LoadMap } from "./map"
import {
    load as LoadAutoComplete,
    GetPredictions as GetAutoCompletePredictions
} from "./autocomplete"
import { GetCurrentLocation } from "./geocode"

const load = () =>
    new Promise<void>((resolve, reject) => {
        LoadMap()
            .then(() =>
                LoadAutoComplete()
                    .then(() => {
                        resolve()
                    })
                    .catch(err => reject(err))
            )
            .catch(err => reject(err))
    })

export {
    GetCurrentLocation,
    load as LoadGoogleMaps,
    GetAutoCompletePredictions
}
