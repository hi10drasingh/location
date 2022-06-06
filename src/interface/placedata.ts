import Nullable from "./nullable"

/**
 * Google Place Data format.
 */
export default interface IPlaceData {
	/**
	 *
	 */
	[key: string]: Nullable<number> | string | Nullable<string>
	/**
	 * Latitude of the Place.
	 */
	lat: Nullable<number>
	/**
	 * Longitute of the Place.
	 */
	lng: Nullable<number>
	/**
	 * City of the place.
	 */
	city: string
	/**
	 *	State of the place.
	 */
	state: Nullable<string>
	/**
	 * Pincode of the place.
	 */
	pincode: Nullable<string>
	/**
	 * Google Place ID of the place.
	 */
	place_id: Nullable<string>
	/**
	 * Country of the place.
	 */
	country: string
	/**
	 * Address of the place.
	 */
	address: Nullable<string>
}
