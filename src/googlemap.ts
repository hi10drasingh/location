import { LoadResource, RESOURCE } from "./utils"

const GoogleMap = () => {
    const JS =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyDcupH1pAzOULz35i00ADvn1sndjRa4m_A&libraries=places"

    const loadAutoComplete = async () => {
        const style =
            "/themes/beta/css/elements/plugins/location/suggestions.css"

        const html = `
        <div class="pac-container pac-logo location-suggestions>
            <div class="pac-item"> <span class="pac-icon pac-icon-marker"></span> <span class="pac-item-query"> <span class="pac-matched"></span> </span> <span class="pac-secondary"> <span class="pac-matched"></span> </span>
            </div>
            <div class="pac-item"> <span class="pac-icon pac-icon-marker"></span> <span class="pac-item-query"> <span class="pac-matched"></span> </span> <span class="pac-secondary"> <span class="pac-matched"></span> </span>
            </div>
            <div class="pac-item"> <span class="pac-icon pac-icon-marker"></span> <span class="pac-item-query"> <span class="pac-matched"></span> </span> <span class="pac-secondary"> <span class="pac-matched"></span> </span>
            </div>
            <div class="pac-item"> <span class="pac-icon pac-icon-marker"></span> <span class="pac-item-query"> <span class="pac-matched"></span> </span> <span class="pac-secondary"> <span class="pac-matched"></span> </span>
            </div>
            <div class="pac-item"> <span class="pac-icon pac-icon-marker"></span> <span class="pac-item-query"> <span class="pac-matched"></span> </span> <span class="pac-secondary"> <span class="pac-matched"></span> </span>
            </div>
        </div>`

        await LoadResource(RESOURCE.CSS, style)

        document.body.insertAdjacentHTML("beforeend", html)
    }

    const suggestionsSelector = ".pac-container.location-suggestions"

    const isLoaded = () => Boolean(document.querySelector(suggestionsSelector))

    const applySuggestionAttributes = () => {
        const suggestions =
            document.body.querySelector<HTMLElement>(suggestionsSelector)

        if (!suggestions) return

        suggestions.setAttribute("height", suggestions.offsetHeight.toString())
        suggestions.setAttribute("reverse", "false")

        return suggestions
    }

    const applySuggestionEvents = () => {
        const suggestions = applySuggestionAttributes()

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

    const reverseSuggestions = () => {
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

    const load = async () => {
        await LoadResource(RESOURCE.JS, JS).catch(err => {
            console.error(err) // eslint-disable-line no-console
        })

        await loadAutoComplete()

        applySuggestionEvents()
    }

    const showFromGeoLocation = (allowAccessMsg: Boolean) => {
        if (
            typeof navigator.geolocation !== "undefined" &&
            navigator.geolocation
        ) {
            const geocoder = new window.google.maps.Geocoder()

            navigator.geolocation.getCurrentPosition(
                currentPosition => {
                    const currentLatLng = {
                        lat: currentPosition.coords.latitude,
                        lng: currentPosition.coords.longitude
                    }

                    if (currentLatLng) {
                        geocoder.geocode(
                            {
                                location: currentLatLng
                            },
                            (results: Array<Object>, status: string) => {
                                if (status === "OK") {
                                    if (results[0]) {
                                        // self.setLocationData(
                                        //     self.getDataFromMapResult(
                                        //         results[0]
                                        //     )
                                        // )
                                    } else {
                                        console.log(
                                            "No results found from current location cordinates"
                                        )
                                    }
                                } else {
                                    console.log(
                                        `Geocoder failed due to: ${status}`
                                    )
                                }
                            }
                        )
                    }
                },
                () => {
                    if (allowAccessMsg) {
                        // DroomApp.show_msg(
                        //     "Please allow access to your location from browser settings.",
                        //     "info",
                        //     5000
                        // )
                    }
                }
            )
        }
    }
}

export default GoogleMap
