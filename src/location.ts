const Location = () => {}

export type PlaceData = {
    lat: Nullable<number>
    lng: Nullable<number>
    city: string
    state: Nullable<string>
    pincode: Nullable<string>
    place_id: Nullable<string>
    country: string
    address: Nullable<string>
}

export default Location
