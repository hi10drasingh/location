import { IStoreGet, IStoreSet } from "./interface"

interface LSData {
    value: string
    time: number
    expireIn: number
}

const ls = window.localStorage

/**
 * Checks if value exist and has not yet expired.
 *
 * @param {string} key - LS keyName.
 * @returns {boolean} - If key exist and has not expired from Storage.
 */
const exist = (key: string) => {
    const value = ls.getItem(key)
    if (!value) return false

    const cache = JSON.parse(value) as LSData
    const now = new Date().getTime()

    if (cache) {
        if (cache.value && cache.expireIn && cache.time) {
            let diff = (now - cache.time) / 1000
            diff /= 60
            const minutes = Math.abs(Math.round(diff))
            if (minutes < cache.expireIn) {
                return true
            }
        }
        ls.getItem(key)
    }
    return false
}

/**
 * Set data in LocalStorage with given key.
 *
 * @param {string} key - LSKey Name.
 * @param {string} val - LS Value.
 * @param {number} timeInDays - Expiry Time in Days.
 * @returns {void}
 */
const set: IStoreSet = (key: string, val: string, timeInDays: number): void => {
    const data = {
        value: val,
        time: new Date().getTime(),
        expireIn: timeInDays * 24 * 60
    }

    ls.setItem(key, JSON.stringify(data))
}

/**
 * Get Value of a key from Local Storage.
 *
 * @param {string} key - LSKey Name.
 * @returns {string} - LSValue.
 */
const get: IStoreGet = (key: string): Nullable<string> => {
    const value = ls.getItem(key)
    if (!value) {
        return null
    }

    const cache = JSON.parse(value) as LSData
    if (exist(key)) {
        return cache.value
    }
    set(key, "", -1)

    return null
}

export { get, set }
