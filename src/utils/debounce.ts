/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Creates a debounced function that delays invoking `func` until after `wait` milliseconds have elapsed since the last time the debounced function was invoked.
 *
 * @typedef F
 * @param {F} fn - Function that  needs to be delayed.
 * @param {number} delay - Time in milliseconds.
 * @returns {F} - Debounced function with same signature as the param function.
 */
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
