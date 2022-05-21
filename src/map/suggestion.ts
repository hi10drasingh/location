import { IPrediction, StructuredFormatting, MatchedSubstring } from "."

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

let suggestions: Suggestions

const load = () => {
    document.body.insertAdjacentHTML("beforeend", html)

    suggestions = <Suggestions>document.body.querySelector(suggestionsSelector)

    applyEvents()
}

const applyAttributes = () => {
    const suggestions =
        document.body.querySelector<HTMLElement>(suggestionsSelector)

    if (!suggestions) return

    suggestions.setAttribute(heightAttr, suggestions.offsetHeight.toString())
    suggestions.setAttribute(isReverseAttr, "false")

    return suggestions
}

const applyEvents = () => {
    const suggestions = applyAttributes()

    if (!suggestions) return

    const child = suggestions.querySelectorAll(".pac-item")

    const geocoder = new window.google.maps.Geocoder()

    child.forEach(item => {
        // to prevent closeing of suggestion box when clickin on suggestion list
        // as blur is fired before click event , whereas mousedown is fired as same time as blur.focusout
        item.addEventListener("mousedown", event => {
            event.preventDefault()
        })

        item.addEventListener("click", () => {
            suggestions.style.display = "none"
            geocoder.geocode(
                {
                    placeId: item.getAttribute("data-placeId")
                },
                (results: Array<Object>, status: string) => {
                    if (status === "OK") {
                        if (results[0]) {
                            // self.setLocationData(
                            //     self.getDataFromMapResult(results[0]),
                            //     suggestions.inputEle
                            // )
                        } else {
                            /* eslint-disable-line no-console */ console.log(
                                "No results found from current location cordinates"
                            )
                        }
                    } else {
                        /* eslint-disable-line no-console */ console.log(
                            `Geocode was not successful for the following reason: ${status}`
                        )
                    }
                }
            )
        })
    })

    window.addEventListener("scroll", updatePosition, true)

    window.addEventListener("scroll", updatePosition)
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

const updatePosition = () => {
    if (suggestions.style.display === "none") return

    const suggestionsHeight = suggestions.getAttribute("height")

    if (!suggestionsHeight) return

    const height = parseInt(suggestionsHeight)

    let showReverse = false

    const inputPosition = suggestions.currentInput.getBoundingClientRect()
    suggestions.style.left = `${(
        inputPosition.left + window.pageXOffset
    ).toString()}px`

    // enough space in buttom
    if (inputPosition.bottom + height < window.innerHeight) {
        suggestions.style.top = `${(
            inputPosition.bottom +
            window.pageYOffset -
            1
        ).toString()}px`
    } else {
        showReverse = true
        suggestions.style.top = `${(
            inputPosition.top +
            window.pageYOffset -
            height
        ).toString()}px`
    }

    // checking if we need to reverse it
    if (showReverse) {
        if (!isOrderReverse()) reverseOrder()
        suggestions.setAttribute(isReverseAttr, "true")
    } else if (!showReverse) {
        if (isOrderReverse()) reverseOrder()
        suggestions.setAttribute(isReverseAttr, "false")
    }
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
    formatting: StructuredFormatting
) => {
    const matchElement = <HTMLElement>element.querySelector(".pac-matched")

    const matchElementSubstrArray = <MatchedSubstring[]>(
        formatting[`${type}_matched_substrings`]
    )

    const matchElementSubstr = <MatchedSubstring>matchElementSubstrArray[0]

    const matchText = <string>formatting[type]

    const lastChild = <HTMLElement>matchElement.lastChild

    if (formatting.main_text_matched_substrings) {
        matchElement.style.display = "block"
        matchElement.innerText = matchText.substring(
            matchElementSubstr.offset,
            matchElementSubstr.offset + matchElementSubstr.length
        )

        lastChild.nodeValue = matchText.substring(0, matchElementSubstr.length)
    } else {
        matchElement.style.display = "none"
        lastChild.nodeValue = formatting.main_text
    }
}

const updateData = (
    predictions: IPrediction[],
    inputElement: HTMLInputElement
) => {
    suggestions.currentInput = inputElement

    predictions.forEach((prediction, index) => {
        if (!suggestions.childNodes[index]) return
        const item = <HTMLElement>suggestions.childNodes[index]
        const formatting = prediction.structured_formatting

        // pac-item
        item.setAttribute("data-placeId", prediction.place_id)

        const mainTextEle = <HTMLElement>item.querySelector(".pac-item-query")
        updateMatch(MatchType.Main, mainTextEle, formatting)

        const secondaryTextEle = <HTMLElement>(
            item.querySelector(".pac-secondary")
        )
        updateMatch(MatchType.Secondary, secondaryTextEle, formatting)
    })

    updatePosition()
}

export { load, show, hide, updateData }
