import RESOURCE from "./constants"

const parseURL = url => {
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
    const parsedURL = parseURL(url)
    let resource = ""
    switch (type) {
        case RESOURCE.CSS:
            resource = document.createElement("link")
            resource.rel = "stylesheet"
            resource.href = parsedURL
            break

        case RESOURCE.JS:
            resource = document.createElement("script")
            resource.type = "text/javascript"
            resource.src = parsedURL
            break

        default:
            return
    }

    document.head.appendChild(resource)
}

export default loadResource
