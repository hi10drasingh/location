import { LoadResource, RESOURCE } from "../utils"
import AutoComplete from "./autocomplete"

const GoogleMap = () => {
    const JS =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyDcupH1pAzOULz35i00ADvn1sndjRa4m_A&libraries=places"

    const load = async () => {
        await LoadResource(RESOURCE.JS, JS).catch(err => {
            console.error(err) // eslint-disable-line no-console
        })

        await AutoComplete.load()
    }

    const geolocate = (allowAccessMsg: Boolean) => {
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

    return {
        load,
        geolocate
    }
}

export default GoogleMap
