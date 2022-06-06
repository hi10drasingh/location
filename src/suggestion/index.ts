import { HandlerAutoCompleteItemClick } from "../map"

/**
 * Formatting match type.
 */
enum MatchType {
	Main = "main_text",
	Secondary = "secondary_text"
}

/**
 * Updates matching prediction substring according to MatchType.
 */
type UpdateSubstrFunc = (
	type: MatchType,
	element: HTMLElement,
	formatting: google.maps.places.StructuredFormatting
) => void

const suggestionsSelector = ".pac-container.location-suggestions"

const html = `
    <div class="pac-container pac-logo location-suggestions">
        <div class="pac-item">
            <span class="pac-icon pac-icon-marker"></span>
            <span class="pac-item-query">
                <span class="pac-matched"></span>
            </span>
            <span class="pac-secondary">
                <span class="pac-matched"></span>
            </span>
        </div>
        <div class="pac-item">
            <span class="pac-icon pac-icon-marker"></span>
            <span class="pac-item-query">
                <span class="pac-matched"></span>
            </span>
            <span class="pac-secondary">
                <span class="pac-matched"></span>
            </span>
        </div>
        <div class="pac-item">
            <span class="pac-icon pac-icon-marker"></span>
            <span class="pac-item-query">
                <span class="pac-matched"></span>
            </span>
            <span class="pac-secondary">
                <span class="pac-matched"></span>
            </span>
        </div>
        <div class="pac-item">
            <span class="pac-icon pac-icon-marker"></span>
            <span class="pac-item-query">
                <span class="pac-matched"></span>
            </span>
            <span class="pac-secondary">
                <span class="pac-matched"></span>
            </span>
        </div>
        <div class="pac-item">
            <span class="pac-icon pac-icon-marker"></span>
            <span class="pac-item-query">
                <span class="pac-matched"></span>
            </span>
            <span class="pac-secondary">
                <span class="pac-matched"></span>
            </span>
        </div>
    </div>
`

const isReverseAttr = "is-reverse"
const heightAttr = "height"
const currentInputAttr = "current-input"
const placeIDAttr = "place-id"

/**
 * Returns Suggestions Element.
 *
 * @returns {HTMLElement} - Suggestions html element.
 */
const getElement = () => {
	const suggestions = document.querySelector(
		suggestionsSelector
	) as HTMLElement

	return suggestions
}

/**
 * Displays The Suggestions.
 *
 * @returns {void}
 */
const show = (): void => {
	const suggestions = getElement()
	suggestions.style.display = "block"
}

/**
 * Hides The Suggestions.
 *
 * @returns {void}
 */
const hide = (): void => {
	const suggestions = getElement()
	suggestions.style.display = "none"
}

/**
 * Apply Height and IsReverse Attributes To Suggestions.
 *
 * @returns {void}
 */
const applyAttributes = () => {
	const suggestions = getElement()
	suggestions.setAttribute(heightAttr, suggestions.offsetHeight.toString())
	suggestions.setAttribute(isReverseAttr, "false")
}

/**
 * Apply Autocomplete Click Event To Suggestions.
 *
 * @param {HTMLElement} child - Event Target.
 * @returns {void}
 */
const childElementEvents = (child: HTMLElement) => {
	// to prevent closeing of suggestion box when clickin on suggestion list
	child.addEventListener("mousedown", event => {
		event.preventDefault()
	})

	child.addEventListener("click", () => {
		hide()

		const suggestions = getElement()

		const input = document.querySelector(
			suggestions.getAttribute(currentInputAttr) as string
		) as HTMLInputElement

		HandlerAutoCompleteItemClick(
			{
				placeId: child.getAttribute(placeIDAttr)
			},
			input
		)
	})
}

/**
 * Check is suggestion are displayed in reverse order.
 *
 * @returns {boolean} - If reverse order.
 */
const isOrderReverse = () => {
	const suggestions = getElement()

	if (!suggestions.hasAttribute(isReverseAttr)) return false

	return suggestions.getAttribute(isReverseAttr) === "true"
}

/**
 * Reverse the display order of suggestions.
 *
 * @returns {void}
 */
const reverseOrder = () => {
	const suggestions = getElement()

	let itemCount = suggestions.childNodes.length
	// appending list in reverse order // appendChild will replace child nodes
	while (itemCount) {
		const child = suggestions.childNodes[itemCount]
		if (child) suggestions.appendChild(child)
		itemCount -= 1
	}
}

/**
 * Updates the display order of suggestion according to param.
 *
 * @param {boolean} showReverse -if suggestion should be reverse or not.
 * @returns {void}
 */
const updateOrder = (showReverse: boolean) => {
	const suggestions = getElement()
	// checking if we need to reverse it
	if (showReverse) {
		if (!isOrderReverse()) reverseOrder()
		suggestions.setAttribute(isReverseAttr, "true")
	} else if (!showReverse) {
		if (isOrderReverse()) reverseOrder()
		suggestions.setAttribute(isReverseAttr, "false")
	}
}

/**
 * Updates the position of suggestions according to associated input.
 *
 * @returns {void}
 */
const updatePosition = () => {
	const suggestions = getElement()

	let showReverse = false
	const height = parseInt(suggestions.getAttribute(heightAttr) as string, 10)

	const inputSelector = suggestions.getAttribute(currentInputAttr) as string

	const input = document.querySelector(inputSelector)

	if (!input) return

	const inputPos = input.getBoundingClientRect()

	const leftPos = inputPos.left + window.pageXOffset
	suggestions.style.left = `${leftPos.toString()}px`

	let topPos = inputPos.bottom + window.pageYOffset - 1
	suggestions.style.top = `${topPos.toString()}px`

	// not enough space in buttom
	if (inputPos.bottom + height > window.innerHeight) {
		showReverse = true

		topPos = inputPos.top + window.pageYOffset - height - 1
		suggestions.style.top = `${topPos.toString()}px`
	}
	updateOrder(showReverse)
}

/**
 * Apply click and scroll event to suggestion elements.
 *
 * @returns {void}
 */
const applyEvents = () => {
	const suggestions = getElement()

	const child = suggestions.querySelectorAll(".pac-item")

	child.forEach(item => childElementEvents(item as HTMLElement))

	window.addEventListener("scroll", updatePosition, true)

	window.addEventListener("scroll", updatePosition)
}

/**
 * Add suggestion html to document and apply events and attributes.
 *
 * @returns {void}
 */
const load = (): void => {
	document.body.insertAdjacentHTML("beforeend", html)
	hide()
	applyAttributes()
	applyEvents()
}

/**
 * Updates the main and secondary parts of suggestion.
 *
 * @param {MatchType} type - Type of Substr To Update.
 * @param {HTMLElement} element - Element for which match is to be updated.
 * @param {google.maps.places.StructuredFormatting} formatting - Matched substr offset and length.
 * @returns {void}
 */
const updateMatchedSubstr: UpdateSubstrFunc = (type, element, formatting) => {
	if (type === MatchType.Main) {
		const match = element.querySelector(".pac-matched") as HTMLElement

		const matchText = formatting[type]
		const matchSubstrArray =
			formatting[`${MatchType.Main}_matched_substrings`]
		const matchSubstr =
			matchSubstrArray[0] as google.maps.places.PredictionSubstring

		match.style.display = ""
		match.innerText = matchText.substring(
			matchSubstr.offset,
			matchSubstr.offset + matchSubstr.length
		)

		const lastChild = element.lastChild as ChildNode
		lastChild.nodeValue = matchText.substring(
			matchSubstr.offset + matchSubstr.length
		)
	} else {
		const lastChild = element.lastChild as ChildNode
		lastChild.nodeValue = formatting.secondary_text
	}
}

/**
 * Update the suggestion list according to new autocomplete predictions.
 *
 * @param {google.maps.places.AutocompletePrediction[]} predictions - Autocomplete prediction from goole for typed location.
 * @param {string} selector - Current Input Selector.
 * @returns {void}
 */
const updateListData = (
	predictions: google.maps.places.AutocompletePrediction[],
	selector: string
): void => {
	const suggestions = getElement()
	suggestions.setAttribute(currentInputAttr, selector)

	const items = suggestions.querySelectorAll(".pac-item")

	predictions.forEach((prediction, index) => {
		if (!items[index]) return

		const item = items[index] as HTMLElement
		const formatting = prediction.structured_formatting

		// pac-item
		item.setAttribute(placeIDAttr, prediction.place_id)

		const mainTextEle = item.querySelector(".pac-item-query") as HTMLElement
		updateMatchedSubstr(MatchType.Main, mainTextEle, formatting)

		const secondaryTextEle = item.querySelector(
			".pac-secondary"
		) as HTMLElement
		updateMatchedSubstr(MatchType.Secondary, secondaryTextEle, formatting)
	})

	updatePosition()
	show()
}

export {
	hide as HideSuggestion,
	show as ShowSuggestion,
	load as LoadSuggestion,
	updateListData as UpdateSuggestion
}
