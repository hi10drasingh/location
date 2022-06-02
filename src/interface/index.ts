import IPlaceData from "./placedata"

export interface Settings {
	[key: string]: unknown
	isLoaded: boolean
	placeData?: IPlaceData
}

export type { Plugin, FactoryFunc } from "./plugin"

export type { BindInputFunc, UnbindInputFunc } from "./input"

export default IPlaceData
