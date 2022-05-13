import { Cookies } from "./utils"

const User = () => {
    const URL = "/user/location"

    const getUserLocation = async () => {
        const response = await fetch(URL, {
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }
        }).then(res => (res.data ? res.data : null))

        return response
    }

    const setUserLocation = async data => {
        fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                "X-XSRF-TOKEN": decodeURIComponent(Cookies.get("XSRF-TOKEN"))
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
