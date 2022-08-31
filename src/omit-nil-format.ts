import isNil from 'lodash.isnil'
import omitBy from 'lodash.omitby'
import { TransformableInfo } from 'logform'
import { format } from 'winston'

export const omitNilFormat = format((info) => omitBy(info, isNil) as TransformableInfo)
