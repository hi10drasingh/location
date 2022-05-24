import { LoadResource, RESOURCE } from "./utils"
import { IResponse } from "./interface"

const ID = "locationModal"

const URL = "/plugins/location"

const CSS = [
    "/themes/beta/css/elements/plugins/location/style.css",
    "/themes/beta/css/elements/plugins/location/icomoon/style.css"
]

const isLoaded = () => Boolean(document.querySelector(`modal#${ID}`))

const loadDependencies = () => {
    const requests = CSS.map(style =>
        LoadResource(RESOURCE.CSS, style).catch(err => {
            console.error(err) /* eslint-disable-line no-console */
        })
    )

    Promise.all(requests)
        .catch(err => {
            console.error(err) /* eslint-disable-line no-console */
        })
        .then(() => console.log("done") /* eslint-disable-line no-console */)
        .catch(err => console.log(err) /* eslint-disable-line no-console */)
}

const fetchHTML = () => {
    fetch(URL, {
        headers: {
            "X-Requested-With": "XMLHttpRequest"
        }
    })
        .catch(err => console.log(err) /* eslint-disable-line no-console */)
        .then(response => {
            if (response) response.json()
        })
        .then((res: IResponse) => {
            if (res.code === "success") {
                document.body.appendChild(res.data)
            }
        })
        .catch(err => console.log(err) /* eslint-disable-line no-console */)
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
