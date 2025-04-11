import { isFunction } from '@mpietrucha/is'
import { createProperty } from '@mpietrucha/object'

export const createProtected = (source, property, handler) => {
    if (isFunction(handler)) {
        return createProperty(source, property, handler)
    }

    return createProtected(source, property, () => {
        throw new Error(`Property \`${property}\` is protected`)
    })
}
