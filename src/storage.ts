interface IStorage {
    get(key: string): string | null
    set(key: string, val: string, timeInDays: number): void
}

const LS = (): IStorage => {
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

    const get = (key: string): any => {
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

    const set = (key: string, val: string, timeInDays: number): void => {
        const data = {
            value: val,
            time: new Date().getTime(),
            expireIn: timeInDays * 24 * 60
        }

        ls.setItem(key, JSON.stringify(data))
    }

    return {
        get,
        set
    }
}

const Cookies = (): IStorage => {
    const get = (key: string): any => {
        const nameEQ = `${key}=`
        const ca = document.cookie.split(";")

        let cookieValue

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

    const set = (key: string, value: string, timeInDays: number): void => {
        let expires = ""

        const date = new Date()

        value = JSON.stringify(value)

        date.setTime(date.getTime() + timeInDays * 24 * 60 * 60 * 1000)
        expires = `; expires=${date.toUTCString()}`

        document.cookie = `${key}=${btoa(value)}${expires}; path=/`
    }

    return {
        get,
        set
    }
}

export enum Types {
    LS,
    Cookies
}

export const GetStore = (type: Types): IStorage => {
    switch (type) {
        case Types.LS:
            return LS()

        case Types.Cookies:
            return Cookies()
    }
}
