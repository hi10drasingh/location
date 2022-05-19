import { IPlaceData } from "./location"

export default interface IResponse {
    code: string
    data?: any
    errors?: Array<string>
}
