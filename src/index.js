const LocPlugin = (root, factory) => {
    if (typeof root.LocationPlugin === "undefined") {
    }

    return root
}

const factory = window => {
    const MAP = "map"

    const MODAL = "model"

    const TYPES = {
        JS: "js",
        CSS: "css"
    }

    // const defaults = {
    //     global: true,
    //     popup: false
    // }

    const assetList = {
        [MAP]: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDcupH1pAzOULz35i00ADvn1sndjRa4m_A&libraries=places",
        [MODAL]: [
            "/themes/beta/css/elements/plugins/location/style.css",
            "/themes/beta/css/elements/plugins/location/icomoon/style.css"
        ]
    }

    // const extend = () => {
    //     const merged = {}
    //     Array.prototype.forEach.call(arguments, obj => {
    //         for (const key in obj) {
    //             if (!obj.hasOwnProperty(key)) return
    //             merged[key] = obj[key]
    //         }
    //     })
    //     return merged
    // }

    // const emitEvent = (type, elem, detail) => {
    //     // Create a new event
    //     const event = new CustomEvent(type, {
    //         bubbles: true,
    //         cancelable: true,
    //         detail
    //     })

    //     // Dispatch the event
    //     elem.dispatchEvent(event)
    // }

    const getParsedUrl = url => {
        let parsedURL = url

        const assetsURL = window.assets_url || ""

        const assetsVersion = window.assets_version || 1

        if (window.minify === 1) {
            parsedURL = `${assetsURL}?f=${parsedURL}&v=${assetsVersion}`
        } else {
            parsedURL = assetsURL + parsedURL
        }

        return parsedURL
    }

    const loadResource = async (type, url) => {
        const parsedURL = getParsedUrl(url)
        let resource = ""
        switch (type) {
            case TYPES.CSS:
                resource = document.createElement("link")
                resource.rel = "stylesheet"
                resource.href = parsedURL
                break

            case TYPES.JS:
                resource = document.createElement("script")
                resource.type = "text/javascript"
                resource.src = parsedURL
                break

            default:
                break
        }

        document.head.appendChild(resource)
    }

    const loadAssets = async type => {
        switch (type) {
            case MODAL:
                assetList[MODAL].css.forEach(async style => {
                    await loadResource(style)
                })
                break

            case MAP:
                await loadResource(assetList[MAP].js)
                break

            default:
                break
        }
    }

    const loadGoogleMapsJs = async () => {
        if (
            typeof google === "undefined" ||
            typeof google.maps === "undefined"
        ) {
            // load maps script dynamically
            await loadAssets(MAP)
        }
    }

    const constructor = (selector, options) => {}

    const init = async () => {
        loadGoogleMapsJs()

        return constructor
    }

    return init()
}

window = LocPlugin(window, factory)
