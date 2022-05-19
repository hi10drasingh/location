export declare global {
    /*~ Here, declare things that go in the global namespace, or augment
     *~ existing declarations in the global namespace
     */
    interface Window {
        assets_url: string
        assets_version: string
        minify: number
        google: any
    }

    type Nullable<T> = T | null
}
