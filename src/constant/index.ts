import IPlaceData from "../interface"

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

const typeAttrName = "type"
const selectorAttrName = "selector"

const pluginType = {
    GLOBAL: "global",
    LOCAL: "local"
}

const dataAttrNames = {
    lat: "lat",
    lng: "lng",
    city: "city",
    state: "state",
    country: "country",
    address: "address",
    pincode: "pincode",
    placeId: "place_id"
}

export {
    changeEventName as LocationChangeEvent,
    defaultPlaceData as LocationDefaultData,
    attributeSlug as LocationAttrSlug,
    typeAttrName as LocationTypeAttrName,
    selectorAttrName as LocationInputSelectorAttrName,
    pluginType as LocationPluginTypes,
    dataAttrNames as LocationDataAttrList
}
