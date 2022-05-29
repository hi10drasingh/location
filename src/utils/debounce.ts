/* eslint-disable @typescript-eslint/no-explicit-any */
const Debounce = (
    func: (...args: any[]) => void,
    wait: number,
    ...funcArgs: any[]
) => {
    let timeout: Nullable<number>

    return () => {
        const callNow = !timeout

        if (timeout) clearTimeout(timeout)

        timeout = setTimeout(() => {
            timeout = null
        }, wait)

        if (callNow) func.apply(this, funcArgs)
    }
}

export default Debounce
