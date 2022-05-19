import { LoadResource, RESOURCE } from "./utils"
import IResponse from "./response"

const ID = "locationModal"

const URL = "/plugins/location"

const CSS = [
    "/themes/beta/css/elements/plugins/location/style.css",
    "/themes/beta/css/elements/plugins/location/icomoon/style.css"
]

const isLoaded = () => Boolean(document.querySelector(`modal#${ID}`))

const loadDependencies = () => {
    CSS.forEach(async style => {
        await LoadResource(RESOURCE.CSS, style).catch(err => {
            console.error(err) // eslint-disable-line no-console
        })
    })
}

const fetchHTML = () => {
    fetch(URL, {
        headers: {
            "X-Requested-With": "XMLHttpRequest"
        }
    })
        .then(response => response.json())
        .then((res: IResponse) => {
            if (res.code === "success") {
                document.body.appendChild(res.data)
            }
        })
}

const register = (selector: string) => {
    const ele = document.querySelector(selector)

    if (ele) {
        ele.addEventListener("click", event => {
            event.preventDefault()

            if (!isLoaded()) {
                loadDependencies()

                fetchHTML()
            }
        })
    }
}

export default {
    register
}
