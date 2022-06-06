/**
 * Generic error function of logger.
 *
 * @param {unknown} err - Object to be logged.
 * @returns {void}
 */
const error = (err: unknown): void => {
	console.error(err) /* eslint-disable-line no-console */
}

/**
 * Generic info function of logger.
 *
 * @param {unknown} msg - Object to be logged.
 * @returns {void}
 */
const info = (msg: unknown): void => {
	console.info(msg) /* eslint-disable-line no-console */
}

/**
 * Generic warn function of logger.
 *
 * @param {unknown} msg - Object to be logged.
 * @returns {void}
 */
const warn = (msg: unknown): void => {
	console.warn(msg) /* eslint-disable-line no-console */
}

/**
 * Generic log function of logger.
 *
 * @param {unknown} msg - Object to be logged.
 * @returns {void}
 */
const log = (msg: unknown): void => {
	console.log(msg) /* eslint-disable-line no-console */
}

export default { error, info, warn, log }
