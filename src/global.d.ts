declare global {
    /* ~ Here, declare things that go in the global namespace, or augment
     *~ existing declarations in the global namespace
     */
    interface Window {
        assets_url: string
        assets_version: string
        minify: number
    }

    interface DroomResponse {
        code: string
        data?: unknown
        errors?: Array<string>
    }

    type Nullable<T> = T | null
}

export default global
