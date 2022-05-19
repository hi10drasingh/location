import { Types, GetStore } from "./storage"
import { IPlaceData } from "./location"

interface IPopularCityStateMapping {
    [key: string]: string
}

const Cache = () => {
    const cookieKey = "dul"

    const lsKey = "location_data"

    const timeInDays = 365

    const defaultLSData: IPlaceData = {
        lat: null,
        lng: null,
        city: "",
        state: null,
        pincode: null,
        place_id: null,
        country: "india",
        address: null
    }

    const popularCityStateMapping: IPopularCityStateMapping = {
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

    const LS = GetStore(Types.LS)

    const Cookies = GetStore(Types.Cookies)

    const getState = (city: string): Nullable<string> => {
        if (!city) return null

        return popularCityStateMapping[city] || null
    }

    const getCookieData = () => {
        const data = Cookies.get(cookieKey)

        return data ? atob(data) : data
    }

    const getLSData = (): IPlaceData => {
        const data = LS.get(lsKey)

        return data ? JSON.parse(data) : defaultLSData
    }

    const handleMisMatch = () => {
        const cookieData = getCookieData()

        const lsData = getLSData()

        switch (true) {
            case !cookieData && lsData.city:
                Cookies.set(cookieKey, btoa(lsData.city), timeInDays)
                break

            case !lsData.city && cookieData:
            case cookieData && lsData.city && cookieData !== lsData.city:
                let value = {
                    ...defaultLSData,
                    city: cookieData,
                    state: cookieData ? getState(cookieData) : null
                }
                LS.set(lsKey, JSON.stringify(value), timeInDays)
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

    const setData = (data: IPlaceData) => {
        const cookieData = getCookieData()

        if (data.city === cookieData) {
            Cookies.set(cookieKey, btoa(data.city), timeInDays)
        }

        LS.set(lsKey, JSON.stringify(data), timeInDays)
    }

    return {
        getData,
        setData
    }
}

export default Cache
