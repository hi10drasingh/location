import { ErrorHandler } from "../utils"

interface Suggestions extends HTMLElement {
    currentInput: HTMLInputElement
}

enum MatchType {
    Main = "main_text",
    Secondary = "secondary_text"
}

const suggestionsSelector = ".pac-container.location-suggestions"

const html = `
    <div class="pac-container pac-logo location-suggestions>
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

let suggestions: Suggestions | HTMLElement
let geocoder: google.maps.Geocoder

const applyAttributes = () => {
    suggestions.setAttribute(heightAttr, suggestions.offsetHeight.toString())
    suggestions.setAttribute(isReverseAttr, "false")
}

const childElementEvents = (child: HTMLElement) => {
    // to prevent closeing of suggestion box when clickin on suggestion list
    child.addEventListener("mousedown", event => {
        event.preventDefault()
    })

    child.addEventListener("click", () => {
        suggestions.style.display = "none"
        geocoder
            .geocode({
                placeId: child.getAttribute("data-placeId")
            })
            .then(
                results => {
                    if (results) {
                    } else {
                        ErrorHandler.warn(
                            "No results found from current location cordinates"
                        )
                    }
                },
                (rejectReason: string) =>
                    ErrorHandler.warn(
                        `Geocode was not successful for the following reason: ${rejectReason}`
                    )
            )
            .catch((err: Error) => ErrorHandler.error(err))
    })
}

const isOrderReverse = () => {
    if (!suggestions.hasAttribute(isReverseAttr)) return false

    return suggestions.getAttribute(isReverseAttr) === "true"
}

const reverseOrder = () => {
    let itemCount = suggestions.childNodes.length
    // appending list in reverse order // appendChild will replace child nodes
    while (itemCount) {
        const child = suggestions.childNodes[itemCount]
        if (child) suggestions.appendChild(child)
        itemCount -= 1
    }
}

const updateDisplyOrder = (showReverse: boolean) => {
    // checking if we need to reverse it
    if (showReverse) {
        if (!isOrderReverse()) reverseOrder()
        suggestions.setAttribute(isReverseAttr, "true")
    } else if (!showReverse) {
        if (isOrderReverse()) reverseOrder()
        suggestions.setAttribute(isReverseAttr, "false")
    }
}

const updateSuggestions = () => {
    if (suggestions.style.display === "none") return

    let showReverse = false
    const height = parseInt(suggestions.getAttribute("height") as string, 10)
    const inputPos = suggestions.currentInput.getBoundingClientRect()

    suggestions.style.left = `${(
        inputPos.left + window.pageXOffset
    ).toString()}px`

    // enough space in buttom
    if (inputPos.bottom + height < window.innerHeight) {
        suggestions.style.top = `${(
            inputPos.bottom +
            window.pageYOffset -
            1
        ).toString()}px`
    } else {
        showReverse = true
        suggestions.style.top = `${(
            inputPos.top +
            window.pageYOffset -
            height
        ).toString()}px`
    }

    updateDisplyOrder(showReverse)
}

const applyEvents = () => {
    if (!suggestions) return

    const child = suggestions.querySelectorAll(".pac-item")

    child.forEach(item => childElementEvents(item as HTMLElement))

    window.addEventListener("scroll", updateSuggestions, true)

    window.addEventListener("scroll", updateSuggestions)
}

const load = () => {
    document.body.insertAdjacentHTML("beforeend", html)

    suggestions = document.body.querySelector(
        suggestionsSelector
    ) as HTMLElement

    geocoder = new window.google.maps.Geocoder()

    applyAttributes()
    applyEvents()
}

const show = () => {
    suggestions.style.display = "block"
}

const hide = () => {
    suggestions.style.display = "none"
}

const updateMatch = (
    type: MatchType,
    element: HTMLElement,
    formatting: google.maps.places.StructuredFormatting
) => {
    const match = element.querySelector(".pac-matched") as HTMLElement

    const matchSubstrArray = formatting?.[`${type}_matched_substrings`]

    const matchSubstr = matchSubstrArray[0]

    const matchText = formatting[type]
    const lastChild = match.lastChild as HTMLElement

    if (matchSubstr) {
        match.style.display = "block"
        match.innerText = matchText.substring(
            matchSubstr.offset,
            matchSubstr.offset + matchSubstr.length
        )

        lastChild.nodeValue = matchText.substring(0, matchSubstr.length)
    } else {
        match.style.display = "none"
        lastChild.nodeValue = formatting.main_text
    }
}

const updateListData = (
    predictions: IPrediction[],
    inputElement: HTMLInputElement
) => {
    suggestions.currentInput = inputElement

    predictions.forEach((prediction, index) => {
        if (!suggestions.childNodes[index]) return
        const item = suggestions.childNodes[index] as HTMLElement
        const formatting = prediction.structured_formatting

        // pac-item
        item.setAttribute("data-placeId", prediction.place_id)

        const mainTextEle = item.querySelector(".pac-item-query") as HTMLElement
        updateMatch(MatchType.Main, mainTextEle, formatting)

        const secondaryTextEle = item.querySelector(
            ".pac-secondary"
        ) as HTMLElement
        updateMatch(MatchType.Secondary, secondaryTextEle, formatting)
    })

    updateSuggestions()
}

export { load, show, hide, updateListData }
