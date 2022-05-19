import {
    LocalStoreGet,
    LocalStoreSet,
    CookieStoreGet,
    CookieStoreSet
} from "./storage"
import { IPlaceData } from "./location"

interface IPopularCityStateMapping {
    [key: string]: string
}

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

const getState = (city: string): Nullable<string> => {
    if (!city) return null

    return popularCityStateMapping[city] || null
}

const getCookieData = () => {
    const data = CookieStoreGet(cookieKey)

    return data ? atob(data) : data
}

const getLSData = (): IPlaceData => {
    const data = LocalStoreGet(lsKey)

    return data ? JSON.parse(data) : defaultLSData
}

const handleMisMatch = () => {
    const cookieData = getCookieData()

    const lsData = getLSData()

    switch (true) {
        case !cookieData && lsData.city:
            CookieStoreSet(cookieKey, btoa(lsData.city), timeInDays)
            break

        case !lsData.city && cookieData:
        case cookieData && lsData.city && cookieData !== lsData.city:
            let value = {
                ...defaultLSData,
                city: cookieData,
                state: cookieData ? getState(cookieData) : null
            }
            LocalStoreSet(lsKey, JSON.stringify(value), timeInDays)
            break
    }
}

const getData = () => {
    handleMisMatch()

    return {
        cookieData: getCookieData(),
        lsData: LocalStoreGet(lsKey)
    }
}

const setData = (data: IPlaceData) => {
    const cookieData = getCookieData()

    if (data.city === cookieData) {
        CookieStoreSet(cookieKey, btoa(data.city), timeInDays)
    }

    LocalStoreSet(lsKey, JSON.stringify(data), timeInDays)
}

export default {
    getData,
    setData
}
