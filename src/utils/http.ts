/**
 * Droom Wrapper for fetch api.
 *
 * @template T
 * @param {RequestInfo} input - Request defination.
 * @param {RequestInit} init - Request init object.
 * @returns {Promise<T>} - Response promise which resolves to object wth provided type T.
 */
const HTTPClient = <T>(input: RequestInfo, init?: RequestInit): Promise<T> =>
    fetch(input, init).then((response): Promise<T> => {
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        return response.json() as Promise<T>
    })

export default HTTPClient
