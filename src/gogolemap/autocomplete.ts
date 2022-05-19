import { LoadResource, RESOURCE } from "../utils"
import Suggestion from "./suggestions"

const style = "/themes/beta/css/elements/plugins/location/suggestions.css"

const load = async () => {
    await LoadResource(RESOURCE.CSS, style)
    Suggestion.load()
}

export default {
    load
}
