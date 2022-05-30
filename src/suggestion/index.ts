import { ErrorHandler } from "../utils"
import { GetPlaceFromGeocode } from "../map/geocode"
import TriggerLocationChange from "../location"
import IPlaceData from "../interface"

enum MatchType {
    Main = "main_text",
    Secondary = "secondary_text"
}

const suggestionsSelector = ".pac-container.location-suggestions"

const html = `
    <div class="pac-container pac-logo location-suggestions>
        <div class="pac-item">
            <span class="pac-icon pac-icon-marker"></span>

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
        GetPlaceFromGeocode({
            placeId: child.getAttribute(placeIDAttr)
        })
            .then((placeData: IPlaceData) => {
                TriggerLocationChange(placeData)
            })
            .catch(err => ErrorHandler.error(err))
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
    const height = parseInt(suggestions.getAttribute("height") as string, 10)
    const inputPos = (
        JSON.parse(
            suggestions.getAttribute(currentInputAttr) as string
        ) as HTMLInputElement
    ).getBoundingClientRect()

    suggestions.style.left = `${(
        inputPos.left + window.pageXOffset
    ).toString()}px`
    suggestions.style.top = `${(
        inputPos.bottom +
        window.pageYOffset -
        1
    ).toString()}px`
    // enough space in buttom
    if (inputPos.bottom + height > window.innerHeight) {
        showReverse = true
        suggestions.style.top = `${(window.pageYOffset - height).toString()}px`
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

const updateMatchedSubstr = (
    type: MatchType,
    element: HTMLElement,
    formatting: google.maps.places.StructuredFormatting
) => {
    const match = element.querySelector(".pac-matched") as HTMLElement

    const matchText = formatting[type]
    const lastChild = match.lastChild as HTMLElement

    if (type === MatchType.Main) {
        const matchSubstrArray =
            formatting[`${MatchType.Main}_matched_substrings`]
        const matchSubstr =
            matchSubstrArray[0] as google.maps.places.PredictionSubstring

        match.style.display = "block"
        match.innerText = matchText.substring(
            matchSubstr.offset,
            matchSubstr.offset + matchSubstr.length
        )

        lastChild.nodeValue = matchText.substring(0, matchSubstr.length)
    } else {
        match.style.display = "none"
        lastChild.nodeValue = formatting.secondary_text
    }
}

const updateListData = (
    predictions: google.maps.places.AutocompletePrediction[],
    inputElement: HTMLInputElement
): void => {
    const suggestions = getElement()
    suggestions.setAttribute(currentInputAttr, JSON.stringify(inputElement))

    predictions.forEach((prediction, index) => {
        if (!suggestions.childNodes[index]) return
        const item = suggestions.childNodes[index] as HTMLElement
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
}

export {
    hide as HideSuggestion,
    show as ShowSuggestion,
    load as LoadSuggestion,
    updateListData as UpdateSuggestion
}
