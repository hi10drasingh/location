import IPrediction from "./prediction"
import { IResult, Status } from "./result"

interface IBound {
    name?: string
    componentRestrictions?: {
        country: string
    }
    location?: {
        lat: number
        lng: number
    }
}

type GetPlacePredictionsFunction = (
    a: IBound,
    b: (predictions: IPrediction[], element: HTMLInputElement) => void
) => void

type Geocoder = (a: IBound, b: (a: IResult, b: Status) => void) => void

interface Map {
    places: {
        AutocompleteService: () => {
            getPlacePredictions: GetPlacePredictionsFunction
        }
    }
    Geocoder: () => {
        geocode: Geocoder
    }
}

export default Map
