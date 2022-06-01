import { LoadResource, RESOURCE, HTTPClient, ErrorHandler } from "../utils"

interface ModalResonse extends DroomResponse {
    data: string
}

const ID = "locationModal"

const URL = "/plugins/location"

const CSS = [
    "/themes/beta/css/elements/plugins/location/style.css",
    "/themes/beta/css/elements/plugins/location/icomoon/style.css"
]

/**
 * Check is location modal is already loaded.
 *
 * @returns {boolean} Boolean.
 */
const isLoaded = () => Boolean(document.querySelector(`modal#${ID}`))

/**
 * Loads required css for modal.
 *
 * @returns {void}
 */
const loadDependencies = () => {
    const requests = CSS.map(style =>
        LoadResource(RESOURCE.CSS, style).catch(err => ErrorHandler.error(err))
    )

    Promise.all(requests)
        .catch(err => ErrorHandler.error(err))
        .then(() => ErrorHandler.log("done"))
        .catch(err => ErrorHandler.log(err))
}

/**
 * Loads required html for modal and appends it to dom.
 *
 * @returns {void}
 */
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

/**
 * Register modal to on click for a selector.
 *
 * @param {string} selector - Element selector for which click event will be bounded.
 * @returns {void}
 */
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
