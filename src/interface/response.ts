/**
 * Droom Api Response Structure.
 */
interface DroomResponse {
	/**
	 * Code [success] or [failed].
	 */
	code: string
	/**
	 * Api Data.
	 */
	data?: unknown
	/**
	 * Array of Errors in case failure.
	 */
	errors?: Array<string>
}

export default DroomResponse
