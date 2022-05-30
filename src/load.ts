import { LoadGoogleMaps } from "./map"
import { LoadSuggestion } from "./suggestion"

const load = () =>
    new Promise<void>((resolve, reject) => {
        LoadGoogleMaps()
            .then(() => {
                LoadSuggestion()
                resolve()
            })
            .catch(error => reject(error))
    })

export default load
