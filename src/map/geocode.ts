import { processResult } from "./map"
import { TriggerGlobalChange } from "../location"

const GEOLOCATION_NOT_AVAILABLE_MSG =
    "Geolocation is not available for this browser"

const GetPlaceFromGeocode = (request: google.maps.GeocoderRequest) => {
    const geocoder = new window.google.maps.Geocoder()

    return geocoder.geocode(request).then(res => {
        if (!res.results?.[0]) {
            throw new Error("No geocode results found.")
        }
        return processResult(res.results[0])
    })
}

const GetCurrentLocation = () =>
    new Promise<void>((resolve, reject) => {
        if (!navigator?.geolocation) {
            reject(new Error(GEOLOCATION_NOT_AVAILABLE_MSG))
        }

        navigator.geolocation.getCurrentPosition(
            currentPosition => {
                GetPlaceFromGeocode({
                    location: {
                        lat: currentPosition.coords.latitude,
                        lng: currentPosition.coords.longitude
                    }
                })
                    .then(placeData => {
                        TriggerGlobalChange(placeData)
                        resolve()
                    })
                    .catch(err => reject(err))
            },
            err => reject(err)
        )
    })

export { GetPlaceFromGeocode, GetCurrentLocation }
