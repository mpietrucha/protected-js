import { createProtected } from '@/protected'
import { not } from '@mpietrucha/is'

export class InteractsWithProtected {
    static protected(source, ...properties) {
        if (not(source, this)) {
            return
        }

        return createProtected(source, ...properties)
    }
}
