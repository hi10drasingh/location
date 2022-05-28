import { CookieStoreGet, ErrorHandler, HTTPClient } from "../utils"
import { IPlaceData } from "../interface"
import { LocationChangeEvent } from "../location"

interface UserLocationResponse extends DroomResponse {
    data: Nullable<IPlaceData>
}

const URL = "/user/location"

const getUserLocation = async () => {
    const response = await HTTPClient<UserLocationResponse>(URL, {
        headers: {
            "X-Requested-With": "XMLHttpRequest"
        }
    }).then((res: UserLocationResponse) => (res.data ? res.data : null))

    return response
}

const setUserLocation = (data: IPlaceData) => {
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
    }).catch((err: Error) => ErrorHandler.error(err))
}

const handleLocationChange = (event: Event) => {
    const customInput = event as CustomEvent

    const placeData = customInput.detail as IPlaceData

    setUserLocation(placeData)
}

const load = () => {
    window.addEventListener(LocationChangeEvent, handleLocationChange)
}

export default {
    load,
    getUserLocation,
    setUserLocation
}
