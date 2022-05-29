const error = (err: unknown): void => {
    console.error(err) /* eslint-disable-line no-console */
}

const info = (msg: string): void => {
    console.info(msg) /* eslint-disable-line no-console */
}

const warn = (msg: string): void => {
    console.warn(msg) /* eslint-disable-line no-console */
}

const log = (variable: unknown): void => {
    console.log(variable) /* eslint-disable-line no-console */
}

export default { error, info, warn, log }
