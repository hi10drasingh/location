import { IStoreGet, IStoreSet } from "./interface"

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

const set: IStoreSet = (
    key: string,
    value: string,
    timeInDays: number
): void => {
    let expires = ""

    const date = new Date()

    const jsonValue = JSON.stringify(value)

    date.setTime(date.getTime() + timeInDays * 24 * 60 * 60 * 1000)
    expires = `; expires=${date.toUTCString()}`

    document.cookie = `${key}=${btoa(jsonValue)}${expires}; path=/`
}

export { get, set }
