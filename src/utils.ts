export const RESOURCE = {
    JS: "js",
    CSS: "css"
}

const parseURL = (url: string) => {
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

const existingResource = (type: string, url: string) => {
    let selector
    switch (type) {
        case RESOURCE.JS:
            selector = `script[src="${url}"]`
            break

        case RESOURCE.CSS:
            selector = `link[href="${url}"]`
            break

        default:
            throw new Error("Please provide a valid resource type")
    }

    return document.querySelector(selector)
}

export const LoadResource = (type: string, url: string) => {
    const promise = new Promise((resolve, reject) => {
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

    return promise
}
