const Modal = () => {
    const ID = "locationModal"

    const URL = "/plugins/location"

    const CSS = [
        "/themes/beta/css/elements/plugins/location/style.css",
        "/themes/beta/css/elements/plugins/location/icomoon/style.css"
    ]

    const isLoaded = () => Boolean(document.querySelector(`modal#${ID}`))

    const fetchHTML = () => {
        fetch(URL, {
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }
        }).then(res => {
            if (res.code === "success") {
                document.body.appendChild(res.data)
            }
        })
    }

    const register = selector => {
        const ele = document.querySelector(selector)

        if (ele) {
            ele.addEventListener("click", event => {
                event.preventDefault()

                if (!isLoaded()) {
                    fetchHTML()
                }
            })
        }
    }
}

export default Modal
