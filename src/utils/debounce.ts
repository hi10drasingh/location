/* eslint-disable @typescript-eslint/no-explicit-any */
export function Debounce<F extends (...params: any[]) => void>(
    fn: F,
    delay: number
) {
    let timeoutID: number
    return function debouncefunc(this: any, ...args: any[]) {
        clearTimeout(timeoutID)
        timeoutID = window.setTimeout(() => fn.apply(this, args), delay)
    } as F
}

export default Debounce
