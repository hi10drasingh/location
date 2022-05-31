import { HandlerAutoCompleteItemClick } from "../map"

enum MatchType {
    Main = "main_text",
    Secondary = "secondary_text"
}

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

const getElement = () => {
    const suggestions = document.querySelector(
        suggestionsSelector
    ) as HTMLElement

    return suggestions
}

const show = (): void => {
    const suggestions = getElement()
    suggestions.style.display = "block"
}

const hide = (): void => {
    const suggestions = getElement()
    suggestions.style.display = "none"
}

const applyAttributes = () => {
    const suggestions = getElement()
    suggestions.setAttribute(heightAttr, suggestions.offsetHeight.toString())
    suggestions.setAttribute(isReverseAttr, "false")
}

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

const isOrderReverse = () => {
    const suggestions = getElement()

    if (!suggestions.hasAttribute(isReverseAttr)) return false

    return suggestions.getAttribute(isReverseAttr) === "true"
}

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

const applyEvents = () => {
    const suggestions = getElement()

    const child = suggestions.querySelectorAll(".pac-item")

    child.forEach(item => childElementEvents(item as HTMLElement))

    window.addEventListener("scroll", updatePosition, true)

    window.addEventListener("scroll", updatePosition)
}

const load = (): void => {
    document.body.insertAdjacentHTML("beforeend", html)
    applyAttributes()
    applyEvents()
}

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
