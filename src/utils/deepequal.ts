const isObject = (object: any) => {
    return object != null && typeof object === "object"
}

const DeepEqual = (
    object1: { [key: string]: any },
    object2: { [key: string]: any }
) => {
    const keys1 = Object.keys(object1)
    const keys2 = Object.keys(object2)

    if (keys1.length !== keys2.length) {
        return false
    }

    for (const key of keys1) {
        const val1 = object1[key]
        const val2 = object2[key]

        const areObjects = isObject(val1) && isObject(val2)

        if (!areObjects && val1 !== val2) return false

        if (areObjects && !DeepEqual(val1, val2)) return false
    }

    return true
}

export default DeepEqual
