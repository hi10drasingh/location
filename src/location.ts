export interface IPlaceData {
    lat: Nullable<number>
    lng: Nullable<number>
    city: string
    state: Nullable<string>
    pincode: Nullable<string>
    place_id: Nullable<string>
    country: string
    address: Nullable<string>
}

const globalAttrName = "locglobal"

const inputListner = event => {}

const applyEvents = (ele: HTMLInputElement, isGlobal: boolean) => {
    ele.addEventListener("input", inputListner())
}

const bind = (ele: HTMLInputElement, isGlobal: boolean) => {
    applyEvents(ele)

    if (isGlobal) {
        ele.setAttribute(globalAttrName, globalAttrName)
    }
}

export default {
    bind
}
