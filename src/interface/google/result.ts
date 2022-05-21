type Status = string

interface IAddressComponent {
    long_name: string
    short_name: string
    types: Array<string>
}

interface IGeometry {
    location: {
        lat: () => number
        lng: () => number
    }
}

interface IResult {
    address_components: IAddressComponent[]
    formatted_address: string
    place_id: string
    geometry: IGeometry
}

export type { Status, IResult }
