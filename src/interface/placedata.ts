export default interface IPlaceData {
    [key: string]: Nullable<number> | string | Nullable<string>
    lat: Nullable<number>
    lng: Nullable<number>
    city: string
    state: Nullable<string>
    pincode: Nullable<string>
    place_id: Nullable<string>
    country: string
    address: Nullable<string>
}
