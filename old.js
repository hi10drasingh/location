var LocationPlugin =
    LocationPlugin ||
    new (function () {
        var self = this

        var geocoder

        var suggestions

        var suggestionsHeight

        var cookieName = "dul"

        var clickElements = []

        var lsKeyName = "location_data"

        var cacheTimeDays = 365 // One Year Cache

        var modalId = "locationModal"

        var locationSearchInputs = []

        var isModalLoaded = false

        var AutoCompleteLoaded = false

        var locationGlobalAttr = "locglobal"

        var assetList = {
            maps: {
                js: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDcupH1pAzOULz35i00ADvn1sndjRa4m_A&libraries=places"
            },
            modal: {
                css: [
                    "/themes/beta/css/elements/plugins/location/style.css",
                    "/themes/beta/css/elements/plugins/location/icomoon/style.css"
                ]
            }
        }

        var defaultPlaceData = {
            lat: null,
            lng: null,
            city: "",
            state: null,
            pincode: null,
            place_id: null,
            country: "india",
            address: null
        }

        var placeData = (function () {
            return LS.exist(lsKeyName) ? LS.get(lsKeyName) : defaultPlaceData
        })()

        var cityStateMapping = {
            delhi: "delhi",
            mumbai: "maharashtra",
            pune: "maharashtra",
            bangalore: "karnataka",
            hyderabad: "telangana",
            gurgoan: "haryana",
            gurugram: "haryana",
            kolkata: "west bengal",
            chennai: "tamil nadu",
            jaipur: "rajasthan",
            surat: "gujarat"
        }

        this.init = function (clickElement = null) {
            if (clickElement) {
                self.registerOnClick($(clickElement))
            }

            // Get City from either localStorage OR Cookiee
            let city = placeData.city ? placeData.city : self.getCookie()

            // check if city in place data is same as city provided
            if (city.toLowerCase() !== placeData.city) {
                placeData = jQuery.extend({}, defaultPlaceData, {
                    city: city.toLowerCase()
                })
            }

            if (!city) {
                // will run only if city is unavailabe
                self.locationNotFound()
            } else {
                self.setLocationData(placeData)
            }
        }

        this.locationNotFound = function () {
            self.getUserLocation(function () {
                if (!placeData.city) {
                    self.loadGoogleMapsJs(function () {
                        self.showFromGeoLocation(false)
                    })
                }
            })
        }

        this.showFromGeoLocation = function (showMsg) {
            let showModalOnFail = window.location.pathname == "/"
            if (
                typeof navigator.geolocation !== "undefined" &&
                navigator.geolocation
            ) {
                navigator.geolocation.getCurrentPosition(
                    function (currentPosition) {
                        currentPosition = {
                            lat: currentPosition.coords.latitude,
                            lng: currentPosition.coords.longitude
                        }

                        if (currentPosition) {
                            geocoder = geocoder
                                ? geocoder
                                : new google.maps.Geocoder()
                            geocoder.geocode(
                                {
                                    location: currentPosition
                                },
                                function (results, status) {
                                    if (status === "OK") {
                                        if (results[0]) {
                                            self.setLocationData(
                                                self.getDataFromMapResult(
                                                    results[0]
                                                )
                                            )
                                        } else {
                                            console.log(
                                                "No results found from current location cordinates"
                                            )
                                        }
                                    } else {
                                        console.log(
                                            "Geocoder failed due to: " + status
                                        )
                                    }

                                    if (showModalOnFail && !placeData.city) {
                                        self.showModal()
                                    }
                                }
                            )
                        }
                    },
                    function (error) {
                        console.log(error)
                        if (showMsg) {
                            DroomApp.show_msg(
                                "Please allow access to your location from browser settings.",
                                "info",
                                5000
                            )
                        } else if (showModalOnFail && !placeData.city) {
                            self.showModal()
                        }
                    }
                )
            } else {
                console.log("Geolocation is not supported by this browser.")
                if (showModalOnFail && !placeData.city) {
                    clickElements[0].trigger("click")
                }
            }
        }

        this.registerOnClick = function (clickElement) {
            clickElement.on("click", function (event) {
                event.preventDefault()

                if (isModalLoaded === false) {
                    self.loadAssets("modal")

                    self.fetchModal()

                    self.bindLocationSearch(
                        $("#" + modalId).find("#locationSearch")
                    )
                }

                self.showModal()
            })

            clickElements.push(clickElement)
        }

        this.bindLocationSearch = function (
            locationSearchInput,
            isGlobal = true
        ) {
            locationSearchInput = $(locationSearchInput)
            self.loadGoogleMapsJs(
                function () {
                    if (locationSearchInput.length) {
                        self.loadAutoComplete()

                        if (isGlobal) {
                            locationSearchInputs.push(locationSearchInput)
                        }

                        locationSearchInput = locationSearchInput[0]

                        if (isGlobal) {
                            locationSearchInput.setAttribute(
                                locationGlobalAttr,
                                locationGlobalAttr
                            )
                        }

                        locationSearchInput.addEventListener(
                            "input",
                            self.inputEntHandler(locationSearchInput)
                        )

                        locationSearchInput.addEventListener(
                            "blur",
                            self.blurEntHandler
                        )

                        let ulElement = document.createElement("ul")
                        ulElement.className = "autocomplete-results"

                        locationSearchInput.parentNode.insertBefore(
                            ulElement,
                            locationSearchInput.nextSibling
                        )

                        if (isGlobal) {
                            self.setInputValue(locationSearchInput, placeData)
                        }
                    }
                },
                {},
                true
            )
        }

        this.bindCallback = function () {
            let autocompleteService =
                new google.maps.places.AutocompleteService()
            let value = this.value
            suggestions.style.display = "none"
            if (value.length > 2) {
                autocompleteService.getPlacePredictions(
                    {
                        input: value,
                        componentRestrictions: {
                            country: "in"
                        }
                    },
                    self.displaySuggestions.bind(this)
                )
            }
        }

        this.inputEntHandler = function (input) {
            let listner = self.debounce(self.bindCallback, 300)

            input.inputEntHandler = listner

            return listner
        }

        this.blurEntHandler = function () {
            let selectedCity = this.getAttribute("city")

            if (!selectedCity || selectedCity != this.value.toLowerCase()) {
                this.value = ""
            } else {
                this.value = this.value.replace(/\b[a-z]/g, function (letter) {
                    return letter.toUpperCase()
                })
            }
            suggestions.style.display = "none"
        }

        this.displaySuggestions = function (predictions, status) {
            if (status != google.maps.places.PlacesServiceStatus.OK) {
                console.log(["displaySuggestionsError", status])
                return
            }

            let input = this

            let inputPosition = input.getBoundingClientRect()

            let showReverse = false

            //set position of suggestion box
            suggestions.style.position = "absoulte"
            suggestions.style.width = inputPosition.width + "px"
            suggestions.style.left =
                (inputPosition.left + window.pageXOffset).toString() + "px"

            // enough space in buttom
            if (inputPosition.bottom + suggestionsHeight < window.innerHeight) {
                suggestions.style.top =
                    (inputPosition.bottom + window.pageYOffset - 1).toString() +
                    "px"
            } else {
                showReverse = true
                suggestions.style.top =
                    (
                        inputPosition.top +
                        window.pageYOffset -
                        suggestionsHeight -
                        1
                    ).toString() + "px"
            }

            suggestions.inputEle = input

            let items = suggestions.querySelectorAll(".pac-item")

            // checking if we need to reverse the list
            if (showReverse) {
                if (!suggestions.isReverse) predictions = predictions.reverse()
                suggestions.isReverse = true
            } else if (!showReverse) {
                suggestions.isReverse = false
            }

            //set value for new prediction
            predictions.forEach(function (prediction, index) {
                if (typeof items[index] !== "undefined") {
                    let item = items[index]
                    let formatting = prediction.structured_formatting

                    //pac-item
                    item.setAttribute("data-placeId", prediction.place_id)

                    let mainTextEle = item.querySelector(".pac-item-query")
                    if (
                        typeof formatting.main_text_matched_substrings !==
                        "undefined"
                    ) {
                        mainTextEle.querySelector(
                            ".pac-matched"
                        ).style.display = ""
                        mainTextEle.querySelector(".pac-matched").innerText =
                            formatting.main_text.substr(
                                formatting.main_text_matched_substrings[0]
                                    .offset,
                                formatting.main_text_matched_substrings[0]
                                    .length
                            )

                        mainTextEle.lastChild.nodeValue =
                            formatting.main_text.substr(
                                formatting.main_text_matched_substrings[0]
                                    .length
                            )
                    } else {
                        mainTextEle.querySelector(
                            ".pac-matched"
                        ).style.display = "none"
                        mainTextEle.lastChild.nodeValue = formatting.main_text
                    }

                    let secondaryTextEle = item.querySelector(".pac-secondary")
                    if (
                        typeof formatting.secondary_text_matched_substrings !==
                        "undefined"
                    ) {
                        secondaryTextEle.querySelector(
                            ".pac-matched"
                        ).style.display = ""
                        secondaryTextEle.querySelector(
                            ".pac-matched"
                        ).innerText = formatting.secondary_text.substr(
                            formatting.secondary_text_matched_substrings[0]
                                .offset,
                            formatting.secondary_text_matched_substrings[0]
                                .length
                        )

                        secondaryTextEle.lastChild.nodeValue =
                            formatting.secondary_text.substr(
                                formatting.secondary_text_matched_substrings[0]
                                    .length
                            )
                    } else {
                        secondaryTextEle.querySelector(
                            ".pac-matched"
                        ).style.display = "none"
                        secondaryTextEle.lastChild.nodeValue =
                            formatting.secondary_text
                    }
                }
            })

            suggestions.style.display = "block"
        }

        this.bindPopularCitiesClick = function () {
            if ($("#" + modalId).length) {
                $("#" + modalId)
                    .find("ul.popular-cities li a")
                    .on("click", function (event) {
                        event.preventDefault()

                        let city = $(event.currentTarget).text().toLowerCase()

                        self.setLocationData(
                            jQuery.extend({}, defaultPlaceData, {
                                city: city,
                                state:
                                    typeof cityStateMapping[city] !==
                                    "undefined"
                                        ? cityStateMapping[city]
                                        : null
                            })
                        )
                    })
            }
        }

        this.bindDetectMyLocationClick = function () {
            if ($("#" + modalId + " #detectMyLocation").length) {
                $("#" + modalId + " #detectMyLocation").on(
                    "click",
                    function (event) {
                        event.preventDefault()
                        self.showFromGeoLocation(true)
                        self.closeModal()
                    }
                )
            }
        }

        this.loadAutoComplete = function () {
            if (AutoCompleteLoaded === false) {
                //styles for suggestions
                let css = "",
                    head =
                        document.head ||
                        document.getElementsByTagName("head")[0],
                    style = document.createElement("style")
                css +=
                    '@keyframes beginBrowserAutofill { 0% {} to {} } @keyframes endBrowserAutofill { 0% {} to {} } .pac-container { background-color: #fff; position: absolute!important; z-index: 10000; border-radius: 2px; border-top: 1px solid #d9d9d9; font-family: Arial, sans-serif; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3); -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; overflow-x: scroll } .pac-item { cursor: default; padding: 0 4px; white-space: nowrap; line-height: 30px; text-align: left; border-top: 1px solid #e6e6e6; font-size: 11px; color: #515151 } .pac-item:hover { background-color: #fafafa } .pac-item-selected, .pac-item-selected:hover { background-color: #ebf2fe } .pac-matched { font-weight: 700 } .pac-item-query { font-size: 13px; padding-right: 3px; color: #000 } .pac-icon { width: 15px; height: 20px; margin-right: 7px; margin-top: 6px; display: inline-block; vertical-align: top; background-image: url("https://maps.gstatic.com/mapfiles/api-3/images/autocomplete-icons.png"); background-size: 34px } .hdpi .pac-icon { background-image: url("https://maps.gstatic.com/mapfiles/api-3/images/autocomplete-icons_hdpi.png") } .pac-icon-search { background-position: -1px -1px } .pac-item-selected .pac-icon-search { background-position: -18px -1px } .pac-icon-marker { background-position: -1px -161px } .pac-item-selected .pac-icon-marker { background-position: -18px -161px } .pac-placeholder { color: gray } .pac-target-input:-webkit-autofill { animation-name: beginBrowserAutofill } .pac-target-input:not(:-webkit-autofill) { animation-name: endBrowserAutofill }'

                head.appendChild(style)

                style.type = "text/css"
                if (style.styleSheet) {
                    // This is required for IE8 and below.
                    style.styleSheet.cssText = css
                } else {
                    style.appendChild(document.createTextNode(css))
                }

                //HTML for suggestions
                document.body.insertAdjacentHTML(
                    "beforeend",
                    '<div class="pac-container pac-logo"> <div class="pac-item"> <span class="pac-icon pac-icon-marker"></span> <span class="pac-item-query"> <span class="pac-matched"></span> </span> <span class="pac-secondary"> <span class="pac-matched"></span> </span> </div> <div class="pac-item"> <span class="pac-icon pac-icon-marker"></span> <span class="pac-item-query"> <span class="pac-matched"></span> </span> <span class="pac-secondary"> <span class="pac-matched"></span> </span> </div> <div class="pac-item"> <span class="pac-icon pac-icon-marker"></span> <span class="pac-item-query"> <span class="pac-matched"></span> </span> <span class="pac-secondary"> <span class="pac-matched"></span> </span> </div> <div class="pac-item"> <span class="pac-icon pac-icon-marker"></span> <span class="pac-item-query"> <span class="pac-matched"></span> </span> <span class="pac-secondary"> <span class="pac-matched"></span> </span> </div> <div class="pac-item"> <span class="pac-icon pac-icon-marker"></span> <span class="pac-item-query"> <span class="pac-matched"></span> </span> <span class="pac-secondary"> <span class="pac-matched"></span> </span> </div> </div>'
                )

                //script for suggestion
                geocoder = geocoder ? geocoder : new google.maps.Geocoder()

                suggestions = document.body.querySelector(".pac-container")

                // Recoreding suggestion height
                suggestionsHeight = suggestions.offsetHeight

                // initial value if list is reversed
                suggestions.isReverse = false

                let autocomplete_items =
                    suggestions.querySelectorAll(".pac-item")
                for (let autocomplete_item of autocomplete_items) {
                    //to prevent closeing of suggestion box when clickin on suggestion list
                    //as blur is fired before click event , whereas mousedown is fired as same time as blur.focusout
                    autocomplete_item.addEventListener(
                        "mousedown",
                        function (event) {
                            event.preventDefault()
                        }
                    )
                    autocomplete_item.addEventListener(
                        "click",
                        function (event) {
                            suggestions.style.display = "none"
                            geocoder.geocode(
                                {
                                    placeId:
                                        event.currentTarget.getAttribute(
                                            "data-placeId"
                                        )
                                },
                                function (results, status) {
                                    if (status == "OK") {
                                        if (results[0]) {
                                            self.setLocationData(
                                                self.getDataFromMapResult(
                                                    results[0]
                                                ),
                                                suggestions.inputEle
                                            )
                                        } else {
                                            console.log(
                                                "No results found from current location cordinates"
                                            )
                                        }
                                    } else {
                                        console.log(
                                            "Geocode was not successful for the following reason: " +
                                                status
                                        )
                                    }
                                }
                            )
                        }
                    )
                }

                suggestions.style.display = "none"

                window.addEventListener(
                    "scroll",
                    self.setSuggestionPosition,
                    true
                )

                window.addEventListener("scroll", self.setSuggestionPosition)

                AutoCompleteLoaded = true
            }
        }

        this.setLocationData = function (
            newPlaceData,
            input = locationSearchInputs.length
                ? locationSearchInputs[0][0]
                : self.onFlyGlobalInput()
        ) {
            if (newPlaceData) {
                let isGlobal = input.getAttribute(locationGlobalAttr)

                if (isGlobal) {
                    placeData = newPlaceData

                    self.closeModal()

                    self.setCookie()

                    LS.set(lsKeyName, placeData, null, cacheTimeDays * 24 * 60)

                    self.setUserLocation()
                }

                self.setInputValue(input, newPlaceData)
            }
        }

        this.onFlyGlobalInput = function () {
            // on fly input
            var x = document.createElement("INPUT")
            x.setAttribute(locationGlobalAttr, locationGlobalAttr)

            return x
        }

        this.loadAssets = function (type, jsCallback) {
            if (typeof assetList[type] !== "undefined") {
                if (typeof assetList[type].css !== "undefined") {
                    assetList[type].css.forEach(function (style) {
                        DroomApp.load_css(style)
                    })
                }

                if (typeof assetList[type].js !== "undefined") {
                    DroomApp.load_js(assetList[type].js, jsCallback, {}, true)
                }
            }
        }

        this.loadGoogleMapsJs = function (jsCallback) {
            if (
                typeof google !== "undefined" &&
                typeof google.maps !== "undefined"
            ) {
                //if google is already defined
                jsCallback(null)
            } else if (
                $(document).find(
                    'script[src="' + assetList["maps"]["js"] + '"]'
                ).length
            ) {
                //checking if script is already added but script has not yet been exceuted
                //wait for window to load and google to get defined
                $(window).load(function () {
                    jsCallback(null)
                })
            } else {
                //load maps script dynamically
                self.loadAssets("maps", jsCallback)
            }
        }

        this.fetchModal = function () {
            if (isModalLoaded === false) {
                $.ajax({
                    url: "/plugins/location",
                    type: "get",
                    dataType: "JSON",
                    async: false,
                    headers: {
                        "X-Requested-With": "XMLHttpRequest"
                    },
                    success: function (res) {
                        if (res.code === "success") {
                            $("body").append(res.data)
                            self.bindPopularCitiesClick()
                            self.bindDetectMyLocationClick()
                            isModalLoaded = true
                        } else {
                            console.log(["modalFetchError", res.errors])
                        }
                    },
                    error: function (error) {
                        console.log(["modalFetchError", error])
                    }
                })
            }
        }

        this.showModal = function () {
            if ($("#" + modalId).length) {
                if (!$("#" + modalId).is(":visible")) {
                    $("#" + modalId).modal("show")
                }
            } else {
                clickElements[0].trigger("click")
            }
        }

        this.closeModal = function () {
            if ($("#" + modalId).length) {
                $("#" + modalId).modal("hide")
            }
        }

        this.setInputValue = function (input, newPlaceData) {
            let isGlobal = input.getAttribute(locationGlobalAttr)
            if (!isGlobal) {
                self.populateInputLocationData(input, newPlaceData)
                return
            }

            if ($("#" + modalId).length) {
                $("#" + modalId)
                    .find("ul.popular-cities li.selected")
                    .removeClass("selected")
                if (placeData.city) {
                    $("#" + modalId)
                        .find(
                            'ul.popular-cities li:contains("' +
                                self.locationDisplay(newPlaceData) +
                                '")'
                        )
                        .addClass("selected")
                }
            }

            if (locationSearchInputs.length) {
                locationSearchInputs.forEach(function (ele) {
                    self.populateInputLocationData(ele, newPlaceData)
                })
            }

            if (clickElements.length) {
                clickElements.forEach(function (ele) {
                    if (ele.length) {
                        let type = ele.prop("tagName")

                        if (type == "INPUT") {
                            self.populateInputLocationData(ele, newPlaceData)
                        } else {
                            let label = ele.find("label")
                            if (label.length) {
                                label.text(
                                    newPlaceData.city
                                        ? self.locationDisplay(newPlaceData)
                                        : "Location"
                                )
                            }
                        }
                    }
                })
            }
        }

        this.populateInputLocationData = function (input, newPlcaeData) {
            input = $(input)
            $(input).val(self.locationDisplay(newPlcaeData)).change()

            if (newPlcaeData) {
                let keys = Object.keys(newPlcaeData)
                if (keys.length) {
                    for (let i = 0; i < keys.length; i++) {
                        input.attr(keys[i], newPlcaeData[keys[i]])
                    }
                }
            }
        }

        this.getDataFromMapResult = function (place) {
            let newPlaceData = jQuery.extend({}, defaultPlaceData)
            let locality = "",
                subLocalityExist = false

            if (
                typeof place.geometry !== "undefined" &&
                place.geometry.location !== "undefined"
            ) {
                newPlaceData.lat = place.geometry.location.lat()
                newPlaceData.lng = place.geometry.location.lng()
            }

            if (typeof place.place_id !== "undefined") {
                newPlaceData.place_id = place.place_id
            }

            if (typeof place.formatted_address !== "undefined") {
                newPlaceData.address = place.formatted_address
            }

            if (typeof place.address_components !== "undefined") {
                for (let component of place.address_components) {
                    if (component.types.includes("sublocality")) {
                        subLocalityExist = true
                    }

                    if (component.types[0] === "locality") {
                        locality = component.long_name.toLowerCase()
                    }

                    if (component.types[0] === "administrative_area_level_2") {
                        newPlaceData.city = component.long_name.toLowerCase()
                    }

                    if (component.types[0] === "administrative_area_level_1") {
                        newPlaceData.state = component.long_name.toLowerCase()
                    }

                    if (component.types[0] === "country") {
                        newPlaceData.country = component.long_name.toLowerCase()
                    }

                    if (component.types[0] === "postal_code") {
                        newPlaceData.pincode = component.long_name
                    }
                }

                //hack works
                if (subLocalityExist || !newPlaceData.city) {
                    newPlaceData.city = locality
                }

                newPlaceData.city = newPlaceData.city
                    .replace("new delhi", "delhi")
                    .replace("gurugram", "gurgaon")
                    .replace("noida", "gautam buddh nagar")
                    .replace("sarhol", "gurgaon")
                    .replace("prayagraj", "allahabad")
                    .replace("bangalore urban", "bengaluru")

                return newPlaceData
            }
        }

        this.locationDisplay = function (newPlaceData) {
            return newPlaceData.city.replace(/\b[a-z]/g, function (letter) {
                return letter.toUpperCase()
            })
        }

        this.getCookie = function () {
            return atob(window.Cookies.get(cookieName))
        }

        this.setCookie = function () {
            if (placeData && self.getCookie() !== placeData.city) {
                window.Cookies.set(
                    cookieName,
                    btoa(placeData.city),
                    cacheTimeDays
                )
            }
        }

        this.getLocationData = function () {
            return placeData
        }

        this.debounce = function (func, wait, immediate) {
            // 'private' variable for instance
            // The returned function will be able to reference this due to closure.
            // Each call to the returned function will share this common timer.
            var timeout

            // Calling debounce returns a new anonymous function
            return function () {
                // reference the context and args for the setTimeout function
                var context = this,
                    args = arguments

                // Should the function be called now? If immediate is true
                //   and not already in a timeout then the answer is: Yes
                var callNow = immediate && !timeout

                // This is the basic debounce behaviour where you can call this
                //   function several times, but it will only execute once
                //   [before or after imposing a delay].
                //   Each time the returned function is called, the timer starts over.
                clearTimeout(timeout)

                // Set the new timeout
                timeout = setTimeout(function () {
                    // Inside the timeout function, clear the timeout variable
                    // which will let the next execution run when in 'immediate' mode
                    timeout = null

                    // Check if the function already ran with the immediate flag
                    if (!immediate) {
                        // Call the original function with apply
                        // apply lets you define the 'this' object as well as the arguments
                        //    (both captured before setTimeout)
                        func.apply(context, args)
                    }
                }, wait)

                // Immediate mode and no wait timer? Execute the function..
                if (callNow) func.apply(context, args)
            }
        }

        this.setSuggestionPosition = function () {
            if (suggestions.style.display == "block") {
                var inputPosition = suggestions.inputEle.getBoundingClientRect()
                suggestions.style.left =
                    (inputPosition.left + window.pageXOffset).toString() + "px"

                let showReverse = false

                // enough space in buttom
                if (
                    inputPosition.bottom + suggestionsHeight <
                    window.innerHeight
                ) {
                    suggestions.style.top =
                        (
                            inputPosition.bottom +
                            window.pageYOffset -
                            1
                        ).toString() + "px"
                } else {
                    showReverse = true
                    suggestions.style.top =
                        (
                            inputPosition.top +
                            window.pageYOffset -
                            suggestionsHeight
                        ).toString() + "px"
                }

                // checking if we need to reverse it
                if (showReverse) {
                    if (!suggestions.isReverse) self.reverseSuggestions()
                    suggestions.isReverse = true
                } else if (!showReverse) {
                    if (suggestions.isReverse) self.reverseSuggestions()
                    suggestions.isReverse = false
                }
            }
        }

        this.reverseSuggestions = function () {
            let itemCount = suggestions.childNodes.length

            // appending list in reverse order // appendChild will replace child nodes
            while (itemCount--) {
                suggestions.appendChild(suggestions.childNodes[itemCount])
            }
        }

        // getUserLocation fetches location from api.
        // if user is logged in.
        this.getUserLocation = function (onCompleteCB = null) {
            if (window.auth) {
                $.ajax({
                    url: "/user/location",
                    type: "get",
                    dataType: "JSON",
                    async: true,
                    headers: {
                        "X-Requested-With": "XMLHttpRequest"
                    },
                    success: function (res) {
                        if (res.code === "success" && !placeData.city) {
                            self.setLocationData(res.data)
                        } else {
                            console.log(["getUserLocationError", res.errors])
                        }
                    },
                    error: function (error) {
                        console.log(["getUserLocationError", error])
                    },
                    complete: function () {
                        if (onCompleteCB) {
                            onCompleteCB()
                        }
                    }
                })
            } else {
                if (onCompleteCB) {
                    onCompleteCB()
                }
            }
        }

        // setUserLocation sets new location in db.
        this.setUserLocation = function () {
            if (window.auth && placeData.city) {
                $.ajax({
                    url: "/user/location",
                    type: "post",
                    dataType: "JSON",
                    data: placeData,
                    async: true,
                    headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "X-XSRF-TOKEN": decodeURIComponent(
                            window.Cookies.get("XSRF-TOKEN")
                        )
                    },
                    success: function (res) {
                        if (!(res.code === "success")) {
                            console.log(["setUserLocationError", res.errors])
                        }
                    },
                    error: function (error) {
                        console.log(
                            console.log(["getUserLocationError", error])
                        )
                    }
                })
            }
        }

        // Unbinds input from location plugin
        this.unbindLocationSearch = function (input) {
            input = $(input)[0]
            let isGlobal = input.getAttribute(locationGlobalAttr)

            if (isGlobal) {
                locationSearchInputs.forEach(function (val, index) {
                    if (val[0] == input) {
                        locationSearchInputs.splice(index, 1)
                    }
                })

                if (input.hasAttribute(locationGlobalAttr)) {
                    input.removeAttribute(locationGlobalAttr)
                }
            }

            let keys = Object.keys(defaultPlaceData)

            for (let i = 0; i < keys.length; i++) {
                if (input.hasAttribute(keys[i])) {
                    input.removeAttribute(keys[i])
                }
            }

            input.removeEventListener("input", input.inputEntHandler)

            input.removeEventListener("blur", self.blurEntHandler)

            input.value = ""
        }

        return {
            init: self.init,
            bindLocationSearch: self.bindLocationSearch,
            unbindLocationSearch: self.unbindLocationSearch,
            getLocationData: self.getLocationData
        }
    })()
