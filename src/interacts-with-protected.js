import { createProtected } from '@/protected'
import { isEmpty, notInstanceOf } from '@mpietrucha/is'

export class InteractsWithProtected {
    #protected

    constructor(...properties) {
        this.#protected = properties

        createProtected(this.constructor, 'protected', () => {
            throw new Error('Cannot call `protected` outside child constructor')
        })
    }

    protected() {
        return this.#protected
    }

    static protected(source, ...properties) {
        if (notInstanceOf(source, this)) {
            return
        }

        isEmpty(properties) && properties.push(source.protected())

        properties.flat().forEach(property => createProtected(source, property))
    }
}
