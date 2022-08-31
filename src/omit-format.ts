import { ValueKeyIteratee } from 'lodash'
import omit from 'lodash.omit'
import { TransformableInfo } from 'logform'
import { format } from 'winston'

export const omitFormat = format((info, opts: { paths: ValueKeyIteratee<unknown> }) => omit(info, opts.paths) as TransformableInfo)
