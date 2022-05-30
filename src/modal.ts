import { LoadResource, RESOURCE, HTTPClient, ErrorHandler } from "./utils"

interface ModalResonse extends DroomResponse {
    data: string
}

const ID = "locationModal"

const URL = "/plugins/location"

const CSS = [
    "/themes/beta/css/elements/plugins/location/style.css",
    "/themes/beta/css/elements/plugins/location/icomoon/style.css"
]

const isLoaded = () => Boolean(document.querySelector(`modal#${ID}`))

const loadDependencies = () => {
    const requests = CSS.map(style =>
        LoadResource(RESOURCE.CSS, style).catch(err => ErrorHandler.error(err))
    )

    Promise.all(requests)
        .catch(err => ErrorHandler.error(err))
        .then(() => ErrorHandler.log("done"))
        .catch(err => ErrorHandler.log(err))
}

const fetchHTML = () => {
    HTTPClient<ModalResonse>(URL, {
        headers: {
            "X-Requested-With": "XMLHttpRequest"
        }
    })
        .then((res: ModalResonse) => {
            if (res.code === "success") {
                document.body.insertAdjacentHTML("beforeend", res.data)
            }
        })
        .catch(err => ErrorHandler.error(err))
}

const register = (selector: string): void => {
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
