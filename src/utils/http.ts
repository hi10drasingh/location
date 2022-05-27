const HTTPClient = <T>(input: RequestInfo, init?: RequestInit): Promise<T> =>
    fetch(input, init).then((response): Promise<T> => {
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        return response.json() as Promise<T>
    })

export default HTTPClient
