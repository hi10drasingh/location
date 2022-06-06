declare global {
	/* ~ Here, declare things that go in the global namespace, or augment
	 *~ existing declarations in the global namespace
	 */
	/**
	 * Browser Global Window Object.
	 */
	interface Window {
		/**
		 * Website Assets URL.
		 */
		assets_url: string
		/**
		 * Website Assets Version.
		 */
		assets_version: string
		/**
		 * Website Minification.
		 */
		minify: number
		/**
		 * Website user auth flag.
		 */
		auth: boolean
		/**
		 * Website cookie domain.
		 */
		cookie_domain: string
	}

	/**
	 *
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

	/**
	 * Nullable<T> type return type {T | null}.
	 *
	 * @template T - Variable type.
	 * @type {T| null}
	 */
	type Nullable<T> = T | null
}

export default global
