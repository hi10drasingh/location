const RESOURCE = {
    CSS: "css",
    JS: "js"
}

const parseURL = (url: string) => {
    let parsedURL = url

    const assetsURL = window.assets_url || ""

    const assetsVersion = window.assets_version || 1

    if (/https|http/.test(parsedURL) || parsedURL.substring(0, 2) === "//") {
        return parsedURL
    }

    if (window.minify === 1) {
        parsedURL = `${assetsURL}?f=${parsedURL}&v=${assetsVersion}`
    } else {
        parsedURL = assetsURL + parsedURL
    }

    return parsedURL
}

const getResource = (type: string, url: string) => {
    let resource
    switch (type) {
        case RESOURCE.CSS:
            resource = document.createElement("link")
            resource.rel = "stylesheet"
            resource.href = url
            break

        default:
            resource = document.createElement("script")
            resource.type = "text/javascript"
            resource.src = url
            resource.async = true
            break
    }

    return resource
}

const LoadResource = (type: string, url: string) =>
    new Promise<HTMLLinkElement | HTMLScriptElement>((resolve, reject) => {
        if (!url) reject(new Error("Please provide a valid url"))

        const parsedURL = parseURL(url)

        const resource = getResource(type, parsedURL)

        document.head.appendChild(resource)

        resource.addEventListener("load", () => {
            resolve(resource)
        })

        resource.addEventListener("error", () => {
            reject(new Error(`${url} failed to load.`))
        })
    })

export { RESOURCE, LoadResource }
