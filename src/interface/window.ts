/**
 * Browser Global Window Object.
 */
interface DroomWindow extends Window {
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

export default DroomWindow
