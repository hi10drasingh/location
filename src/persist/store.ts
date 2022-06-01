import {
    LocalStoreGet,
    LocalStoreSet,
    CookieStoreGet,
    CookieStoreSet
} from "../utils"
import { LocationChangeEvent, LocationDefaultData } from "../constant"
import IPlaceData from "../interface"

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

/**
 * Returns state crossponsing to city listed in popular ciites block.
 *
 * @param {string} city - City Name.
 * @returns {string | null} - State Name.
 */
const getState = (city: string): Nullable<string> => {
    if (!city) return null

    return popularCityStateMapping[city] || null
}

/**
 * Return location city from cookie store.
 *
 * @returns {string | null} - City name if present.
 */
const getCookieData = () => {
    const data = CookieStoreGet(cookieKey)

    return data ? window.atob(data) : data
}

/**
 * Return location data from Local Storage.
 *
 * @returns {IPlaceData} - Place Data.
 */
const getLSData = () => {
    const data = LocalStoreGet(lsKey) as string

    return JSON.parse(data) as IPlaceData
}

/**
 * Return cached location data for current session.
 *
 * @returns {IPlaceData} - Place Data.
 */
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

/**
 * Set cached location data for current session.
 *
 * @param {IPlaceData} data - Current Location Data.
 */
const setData = (data: IPlaceData) => {
    CookieStoreSet(cookieKey, data.city, timeInDays)

    LocalStoreSet(lsKey, JSON.stringify(data), timeInDays)
}

/**
 * Set data to cache if global location changes.
 *
 * @param {CustomEvent} event - Global Location Change Event.
 */
const handleLocationChange = (event: Event) => {
    const customInput = event as CustomEvent

    const placeData = customInput.detail as IPlaceData

    setData(placeData)
}

/**
 * Adds event listener for global location change event.
 */
const load = (): void => {
    window.addEventListener(LocationChangeEvent, handleLocationChange)
}

export { load, getData }
