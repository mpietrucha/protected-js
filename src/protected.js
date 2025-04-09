import { isFunction } from '@mpietrucha/is'
import { set } from 'lodash-es'

export const createProtected = (source, property, handler) => {
    if (isFunction(handler)) {
        return set(source, property, handler)
    }

    return createProtected(source, property, () => {
        throw new Error(`Property \`${property}\` is protected`)
    })
}
