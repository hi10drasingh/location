const Debounce = (
    func: (...args: unknown[]) => void,
    wait: number,
    ...funcArgs: string[]
) => {
    let timeout: Nullable<number>

    return () => {
        const args = funcArgs
        const callNow = !timeout

        if (timeout) clearTimeout(timeout)

        timeout = setTimeout(() => {
            timeout = null
        }, wait)

        if (callNow) func.apply(this, args)
    }
}

export default Debounce
