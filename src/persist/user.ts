import { CookieStoreGet, ErrorHandler, HTTPClient } from "../utils"
import IPlaceData from "../interface"
import { LocationChangeEvent } from "../constant"

interface UserLocationResponse extends DroomResponse {
    data: Nullable<IPlaceData>
}

const URL = "/user/location"

/**
 * Fetched user location from api.
 */
const getUserLocation = async () => {
    const response = await HTTPClient<UserLocationResponse>(URL, {
        headers: {
            "X-Requested-With": "XMLHttpRequest"
        }
    }).then((res: UserLocationResponse) => (res.data ? res.data : null))

    return response
}

/**
 * Set user location to api.
 *
 * @param {IPlaceData} data - Location Data to save.
 */
const setUserLocation = (data: IPlaceData): void => {
    const csrfToken = CookieStoreGet("XSRF-TOKEN")

    HTTPClient(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            ...(csrfToken && {
                "X-XSRF-TOKEN": decodeURIComponent(csrfToken)
            })
        },
        body: JSON.stringify(data)
    }).catch((err: string) => ErrorHandler.error(err))
}

/**
 * Set User Location is global location changes.
 *
 * @param {Event} event - Global Location Change Event.
 */
const handleLocationChange = (event: Event) => {
    const customInput = event as CustomEvent

    const placeData = customInput.detail as IPlaceData

    if (window.auth) setUserLocation(placeData)
}

/**
 * Registers event listener to handle global location change.
 */
const load = (): void => {
    window.addEventListener(LocationChangeEvent, handleLocationChange)
}

export { load as LoadUserStore, getUserLocation, setUserLocation }
