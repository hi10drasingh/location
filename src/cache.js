import { LS, Cookies } from "./utils"

const Cache = () => {
    const cookieKey = "dul"

    const lsKey = "location_data"

    const cacheTimeDays = 365

    const defaultLSData = {
        lat: null,
        lng: null,
        city: "",
        state: null,
        pincode: null,
        place_id: null,
        country: "india",
        address: null
    }

    const popularCityStateMapping = {
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

    const getCookieData = () => {
        const data = Cookies.get(cookieKey)

        return data ? atob(data) : data
    }

    const handleMisMatch = () => {
        const cookieData = getCookieData()

        const lsData = LS.get(lsKey)

        switch (true) {
            case !cookieData && lsData?.city:
                Cookies.set(cookieKey, btoa(lsData.city), cacheTimeDays)
                break

            case !lsData?.city && cookieData:
            case cookieData && lsData?.city && cookieData !== lsData.city:
                LS.set(lsKey, {
                    city: cookieData,
                    state: popularCityStateMapping?.[cookieData]
                        ? popularCityStateMapping?.[cookieData]
                        : null,
                    ...defaultLSData
                })
                break

            default:
                break
        }
    }

    const getData = () => {
        handleMisMatch()

        return {
            cookieData: getCookieData(),
            lsData: LS.get(lsKey)
        }
    }

    const setData = data => {
        const cookieData = getCookieData()

        if (data.city === cookieData) {
            Cookies.set(cookieKey, btoa(data.city), cacheTimeDays)
        }

        LS.set(lsKey, data, cacheTimeDays * 24 * 60)
    }

    return {
        getData,
        setData
    }
}

export default Cache
