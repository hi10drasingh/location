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

const load = () => {
    document.body.insertAdjacentHTML("beforeend", html)

    applyEvents()
}

const applyAttributes = () => {
    const suggestions =
        document.body.querySelector<HTMLElement>(suggestionsSelector)

    if (!suggestions) return

    suggestions.setAttribute("height", suggestions.offsetHeight.toString())
    suggestions.setAttribute("reverse", "false")

    return suggestions
}

const applyEvents = () => {
    const suggestions = applyAttributes()

    if (!suggestions) return

    const autocompleteItems = suggestions.querySelectorAll(".pac-item")

    const geocoder = new window.google.maps.Geocoder()

    autocompleteItems.forEach(item => {
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
}

const reverse = () => {
    const suggestions = document.body.querySelector(suggestionsSelector)

    if (!suggestions) return

    let itemCount = suggestions.childNodes.length

    // appending list in reverse order // appendChild will replace child nodes
    while (itemCount) {
        let child = suggestions.childNodes[itemCount]
        if (child) suggestions.appendChild(child)
        itemCount -= 1
    }
}

export default {
    load
}
