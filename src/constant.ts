import { IPlaceData } from "./interface"

const attributeSlug = "locationplugin"

const changeEventName = "locationchanged"

const defaultPlaceData: IPlaceData = {
    lat: null,
    lng: null,
    city: "",
    state: null,
    pincode: null,
    place_id: null,
    country: "india",
    address: null
}

export {
    changeEventName as LocationChangeEvent,
    defaultPlaceData as LocationDefaultData,
    attributeSlug as LocationAttributeSlug
}
