type Obj = { [key: string]: object }

const isObject = (object: Obj) => object != null && typeof object === "object"

const DeepEqual = (obj1: Obj, obj2: Obj) => {
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)

    if (keys1.length !== keys2.length) return false

    return keys1.every(key => {
        const val1 = obj1[key]
        const val2 = obj2[key]

        const areObjects = isObject(<Obj>val1) && isObject(<Obj>val2)

        if (!areObjects && val1 !== val2) return false

        if (areObjects && !DeepEqual(<Obj>val1, <Obj>val2)) return false

        return true
    })
}

export default DeepEqual
