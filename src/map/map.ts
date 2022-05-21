import { LoadResource, RESOURCE } from "../utils"
import { LoadAutoComplete } from "."

const JS =
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyDcupH1pAzOULz35i00ADvn1sndjRa4m_A&libraries=places"

let geocoder: any

const load = async () => {
    await LoadResource(RESOURCE.JS, JS).catch(err => {
        console.error(err) // eslint-disable-line no-console
    })

    geocoder = new window.google.maps.Geocoder()

    await LoadAutoComplete()
}

const geolocate = (allowAccessMsg: boolean) => {
    if (typeof navigator.geolocation !== "undefined" && navigator.geolocation) {
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
                                console.log(`Geocoder failed due to: ${status}`)
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

export { load, geolocate }
