import { DroomResponse } from "../interface"
import { HTTPClient, ErrorHandler } from "../utils"
import "./style.css"
import "./icomoon/style.css"

/**
 * Get Modal Api response format.
 */
interface ModalResponse extends DroomResponse {
	/**
	 * Data will be html string.
	 */
	data: string
}

const ID = "locationModal"

const URL = "/plugins/location"

/**
 * Check is location modal is already loaded.
 *
 * @returns {boolean} Boolean.
 */
const isLoaded = (): boolean => Boolean(document.querySelector(`modal#${ID}`))

/**
 * Loads required html for modal and appends it to dom.
 *
 * @returns {void}
 */
const fetchHTML = (): void => {
	HTTPClient<ModalResponse>(URL, {
		headers: {
			"X-Requested-With": "XMLHttpRequest"
		}
	})
		.then((res: ModalResponse) => {
			if (res.code === "success") {
				document.body.insertAdjacentHTML("beforeend", res.data)
			}
		})
		.catch((err: unknown) => ErrorHandler.error(err))
}

/**
 * Register modal to on click for a selector.
 *
 * @param {string} selector - Element selector for which click event will be bounded.
 * @returns {void}
 */
const RegisterModal = (selector: string): void => {
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

export default RegisterModal
