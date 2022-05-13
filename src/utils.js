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

const getResource = (type, url) => {
    let resource
    switch (type) {
        case RESOURCE.CSS:
            resource = document.createElement("link")
            resource.rel = "stylesheet"
            resource.href = url
            break

        case RESOURCE.JS:
            resource = document.createElement("script")
            resource.type = "text/javascript"
            resource.src = url
            resource.async = true
            break

        default:
            break
    }

    return resource
}

const LoadResource = (type, url) => {
    const promise = new Promise((resolve, reject) => {
        const parsedURL = parseURL(url)

        const resource = getResource(type, parsedURL)

        document.head.appendChild(resource)

        resource.addEventListener("load", () => {
            resolve(resource)
        })

        resource.addEventListener("error", () => {
            reject(new Error(`${this.src} failed to load.`))
        })
    })

    return promise
}

export const LS = () => {
    const ls = window.localStorage

    const exist = key => {
        const cache = JSON.parse(ls.getItem(key))
        const now = new Date().getTime()

        if (cache) {
            if (cache.value && cache.expireIn && cache.time) {
                let diff = (now - cache.time) / 1000
                diff /= 60
                const minutes = Math.abs(Math.round(diff))
                if (minutes < cache.expireIn) {
                    return true
                }
            }
            ls.getItem(key)
        }

        return false
    }

    const get = key => {
        const cache = JSON.parse(ls.getItem(key))
        if (exist(key)) {
            return cache.value
        }

        return null
    }

    const set = (key, val, minutes) => {
        const data = {
            value: val,
            time: new Date().getTime(),
            expireIn: minutes
        }

        ls.setItem(key, JSON.stringify(data))
    }

    return {
        get,
        set
    }
}

export const Cookies = () => {
    const get = key => {
        const nameEQ = `${key}=`
        const ca = document.cookie.split(";")
        for (let i = 0; i < ca.length; i += 1) {
            let c = ca[i]
            while (c.charAt(0) === " ") c = c.substring(1, c.length)
            if (c.indexOf(nameEQ) === 0)
                return c.substring(nameEQ.length, c.length)
        }
        return null
    }

    const set = (key, value, timeInDays) => {
        let expires = ""

        const date = new Date()

        date.setTime(date.getTime() + timeInDays * 24 * 60 * 60 * 1000)
        expires = `; expires=${date.toUTCString()}`

        document.cookie = `${key}=${btoa(value)}${expires}; path=/`
    }

    return {
        get,
        set
    }
}

export default LoadResource
