import { CookieStoreGet } from "../utils/storage"
import { IResponse } from "../interface"
import { LocationChangeEvent } from "../location"
import { IPlaceData } from "../interface"

const URL = "/user/location"

const getUserLocation = async () => {
    const response = await fetch(URL, {
        headers: {
            "X-Requested-With": "XMLHttpRequest"
        }
    })
        .then(response => response.json())
        .then((res: IResponse) => (res.data ? res.data : null))

    return response
}

const setUserLocation = async (data: IPlaceData) => {
    const csrfToken = CookieStoreGet("XSRF-TOKEN")

    fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            ...(csrfToken && {
                "X-XSRF-TOKEN": decodeURIComponent(csrfToken)
            })
        },
        body: JSON.stringify(data)
    })
}

const handleLocationChange = (event: Event) => {
    const customInput = <CustomEvent>event

    setUserLocation(<IPlaceData>customInput.detail)
}

const load = () => {
    window.addEventListener(LocationChangeEvent, handleLocationChange)
}

export default {
    load,
    getUserLocation,
    setUserLocation
}
