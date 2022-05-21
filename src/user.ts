import { Cookies } from "./storage"
import IResponse from "./response"
import { IPlaceData } from "./location"

const User = () => {
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
        const csrfToken = Cookies.get("XSRF-TOKEN")

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

    return {
        getUserLocation,
        setUserLocation
    }
}

export default User