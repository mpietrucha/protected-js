import { set } from 'lodash-es'

export const createProtected = (source, ...properties) => {
    properties.flat().forEach(property => set(source, property))

    return source
}
