const LocPlugin = (root, factory) => {
    if (typeof root.LocationPlugin === "undefined") {
    }

    return root
}

const factory = window => {
    const constructor = (selector, options) => {}

    const init = async () => {
        loadGoogleMapsJs()

        return constructor
    }

    return init()
}

window = LocPlugin(window, factory)
