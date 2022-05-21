import { IStoreGet, IStoreSet } from "."

const ls = window.localStorage

const exist = (key: string) => {
    const value = ls.getItem(key)
    if (!value) {
        return false
    }

    const cache = JSON.parse(value)

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

const get: IStoreGet = (key: string): any => {
    const value = ls.getItem(key)
    if (!value) {
        return null
    }

    const cache = JSON.parse(value)
    if (exist(key)) {
        return cache.value
    }

    return null
}

const set: IStoreSet = (key: string, val: string, timeInDays: number): void => {
    const data = {
        value: val,
        time: new Date().getTime(),
        expireIn: timeInDays * 24 * 60
    }

    ls.setItem(key, JSON.stringify(data))
}

export { get, set }