import {
    LocalStoreGet,
    LocalStoreSet,
    CookieStoreGet,
    CookieStoreSet
} from "../utils"
import { LocationChangeEvent, LocationDefaultData } from "../constant"
import { IPlaceData } from "../interface"

interface IPopularCityStateMapping {
    [key: string]: string
}

const cookieKey = "dul"

const lsKey = "location_data"

const timeInDays = 365

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

const getLSData = () => {
    const data = LocalStoreGet(lsKey) as string

    return JSON.parse(data) as IPlaceData
}

const getData = (): IPlaceData => {
    const cookieData = getCookieData()

    const lsData = getLSData()

    if (!cookieData) return lsData

    if (lsData && lsData.city === cookieData) return lsData

    return {
        ...LocationDefaultData,
        city: cookieData,
        state: cookieData ? getState(cookieData) : null
    }
}

const setData = (data: IPlaceData) => {
    CookieStoreSet(cookieKey, btoa(data.city), timeInDays)

    LocalStoreSet(lsKey, JSON.stringify(data), timeInDays)
}

const handleLocationChange = (event: Event) => {
    const customInput = event as CustomEvent

    const palceData = customInput.detail as IPlaceData

    setData(palceData)
}

const load = () => {
    window.addEventListener(LocationChangeEvent, handleLocationChange)
}

export default {
    load,
    getData
}