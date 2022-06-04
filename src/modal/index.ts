import { HTTPClient, ErrorHandler } from "../utils"
import "./style.css"
import "./icomoon/style.css"

interface ModalResonse extends DroomResponse {
	data: string
}

const ID = "locationModal"

const URL = "/plugins/location"

/**
 * Check is location modal is already loaded.
 *
 * @returns {boolean} Boolean.
 */
const isLoaded = () => Boolean(document.querySelector(`modal#${ID}`))

/**
 * Loads required html for modal and appends it to dom.
 *
 * @returns {void}
 */
const fetchHTML = () => {
	HTTPClient<ModalResonse>(URL, {
		headers: {
			"X-Requested-With": "XMLHttpRequest"
		}
	})
		.then((res: ModalResonse) => {
			if (res.code === "success") {
				document.body.insertAdjacentHTML("beforeend", res.data)
			}
		})
		.catch(err => ErrorHandler.error(err))
}

/**
 * Register modal to on click for a selector.
 *
 * @param {string} selector - Element selector for which click event will be bounded.
 * @returns {void}
 */
const register = (selector: string): void => {
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

export default {
	register
}
