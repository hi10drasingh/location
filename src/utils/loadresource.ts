import { DroomWindow } from "../interface"

const droomWindow = window as Window as DroomWindow

const RESOURCE = {
	CSS: "css",
	JS: "js"
}

/**
 * Parse url to include assets URL and assets version.
 *
 * @param {string} url - Url to be parsed.
 * @returns {string} - Parsed URL.
 */
const parseURL = (url: string) => {
	let parsedURL = url

	const assetsURL = droomWindow.assets_url || ""

	const assetsVersion = droomWindow.assets_version || 1

	if (/https|http/.test(parsedURL) || parsedURL.substring(0, 2) === "//") {
		return parsedURL
	}

	if (droomWindow.minify === 1) {
		parsedURL = `${assetsURL}?f=${parsedURL}&v=${assetsVersion}`
	} else {
		parsedURL = assetsURL + parsedURL
	}

	return parsedURL
}

/**
 * Create resource for js or css.
 *
 * @param {string } type - Resource Type.
 * @param {string } url - ParsedUrl.
 * @returns {HTMLLinkElement | HTMLScriptElement} - Resource.
 */
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

/**
 * Asynchronously loads resource.
 *
 * @param {string} type - Resource Type.
 * @param {string } url - Resource Link.
 * @returns {Promise<HTMLLinkElement | HTMLScriptElement>} - Promise that will resolved when script or link has loaded.
 */
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
