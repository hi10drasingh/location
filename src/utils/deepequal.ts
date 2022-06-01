type Obj = { [key: string]: unknown }

/**
 * Check if parameter is not null object.
 *
 * @param {Obj} object - Object to check.
 * @returns {boolean} - Is param follow not null object condition.
 */
const isObject = (object: Obj) => object !== null && typeof object === "object"

/**
 * Check if two objects are exactaly equal.
 *
 * @param {Obj} obj1 - Any Object.
 * @param {Obj} obj2 - Any Object.
 * @returns {boolean} - If obj1 is equal to obj2.
 */
const DeepEqual = (obj1: Obj, obj2: Obj): boolean => {
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)

    if (keys1.length !== keys2.length) return false

    return keys1.every(key => {
        const val1 = obj1[key]
        const val2 = obj2[key]

        const areObjects = isObject(val1 as Obj) && isObject(val2 as Obj)

        if (!areObjects && val1 !== val2) return false

        if (areObjects && !DeepEqual(val1 as Obj, val2 as Obj)) return false

        return true
    })
}

export default DeepEqual
