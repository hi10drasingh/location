import { LoadResource, RESOURCE } from "../utils"

const style = "/themes/beta/css/elements/plugins/location/suggestions.css"

const load = () => LoadResource(RESOURCE.CSS, style)

export { load, style }
