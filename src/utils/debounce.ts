/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Creates a debounced function that delays invoking `func` until after `wait` milliseconds have elapsed since the last time the debounced function was invoked.
 *
 * @template F
 * @param {F} fn - Function that  needs to be delayed.
 * @param {number} delay - Time in milliseconds.
 * @returns {F} - Debounced function with same signature as the param function.
 */
export function Debounce<F extends (...params: never[]) => void>(
	fn: F,
	delay: number
): F {
	let timeoutID: number
	const debounced = (...args: Parameters<F>) => {
		clearTimeout(timeoutID)
		timeoutID = window.setTimeout(() => fn(...args), delay)
	}

	return debounced as F
}

export default Debounce
