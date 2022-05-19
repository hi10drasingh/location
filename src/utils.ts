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

export const Debounce = (
    func: any,
    wait: number,
    immediate: boolean = false,
    ...funcArgs: string[]
) => {
    // 'private' variable for instance
    // The returned function will be able to reference this due to closure.
    // Each call to the returned function will share this common timer.
    let timeout: Nullable<number>

    // Calling debounce returns a new anonymous function
    return () => {
        // reference the context and args for the setTimeout function
        const context = this,
            args = funcArgs

        // Should the function be called now? If immediate is true
        //   and not already in a timeout then the answer is: Yes
        const callNow = immediate && !timeout

        // This is the basic debounce behaviour where you can call this
        //   function several times, but it will only execute once
        //   [before or after imposing a delay].
        //   Each time the returned function is called, the timer starts over.
        if (timeout) clearTimeout(timeout)

        // Set the new timeout
        timeout = setTimeout(() => {
            // Inside the timeout function, clear the timeout variable
            // which will let the next execution run when in 'immediate' mode
            timeout = null

            // Check if the function already ran with the immediate flag
            if (!immediate) {
                // Call the original function with apply
                // apply lets you define the 'this' object as well as the arguments
                //    (both captured before setTimeout)
                func.apply(context, args)
            }
        }, wait)

        // Immediate mode and no wait timer? Execute the function..
        if (callNow) func.apply(context, args)
    }
}
