import { IStoreGet, IStoreSet } from "./interface"

/**
 * Get Value of a key from cookie store.
 *
 * @param {string} key - CookieKey Name.
 * @returns {string} - CookieValue.
 */
const get: IStoreGet = (key: string): Nullable<string> => {
    const nameEQ = `${key}=`
    const ca = document.cookie.split(";")

    let cookieValue: Nullable<string> = null

    ca.forEach(value => {
        let c = value

        while (c.charAt(0) === " ") {
            c = c.substring(1, c.length)
        }

        if (c.indexOf(nameEQ) === 0) {
            cookieValue = c.substring(nameEQ.length, c.length)
        }
    })

    return cookieValue
}

/**
 * Set cookie with given name and value for certain time in days.
 *
 * @param {string} key - CookieKey Name.
 * @param {string} value - CookieValue.
 * @param {number} timeInDays - Expiry Time in Days.
 * @returns {void}
 */
const set: IStoreSet = (
    key: string,
    value: string,
    timeInDays: number
): void => {
    let expires = ""

    const date = new Date()

    const jsonValue = value

    date.setTime(date.getTime() + timeInDays * 24 * 60 * 60 * 1000)
    expires = `;expires=${date.toUTCString()}`

    document.cookie = `${key}=${window.btoa(jsonValue)}${expires};domain=${
        window.cookie_domain
    };path=/`
}

export { get, set }
