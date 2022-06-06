import { IPlaceData } from "interface"

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

const dataAttrNames: { [key in keyof IPlaceData]: string } = {
	lat: "lat",
	lng: "lng",
	city: "city",
	state: "state",
	country: "country",
	address: "address",
	pincode: "pincode",
	place_id: "place_id"
}

const defaultConfig = {
	isGlobal: true
}

const popularCityStateMapping: Record<string, string> = {
	delhi: "delhi",
	mumbai: "maharashtra",
	pune: "maharashtra",
	bangalore: "karnataka",
	hyderabad: "telangana",
	gurgaon: "haryana",
	kolkata: "west bengal",
	chennai: "tamil nadu",
	jaipur: "rajasthan",
	surat: "gujarat"
}

export {
	changeEventName as LocationChangeEvent,
	defaultPlaceData as LocationDefaultData,
	attributeSlug as LocationAttrSlug,
	typeAttrName as LocationTypeAttrName,
	selectorAttrName as LocationInputSelectorAttrName,
	pluginType as LocationPluginTypes,
	dataAttrNames as LocationDataAttrList,
	defaultConfig as LocationDefaultConfig,
	popularCityStateMapping as LocationPopularCityStateMap
}
