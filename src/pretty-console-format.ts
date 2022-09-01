import { Format, format, TransformableInfo } from 'logform'
import yamlifyObject from 'yamlify-object'
import yamlifyColors from 'yamlify-object-colors'
import colors from '@colors/colors'

export const prettyConsoleFormat = (): Format =>
  format.combine(
    format.colorize(),
    format.timestamp({ format: 'HH:mm:ss.SSS' }),
    format.printf((info: TransformableInfo) => {
      const { level, timestamp, message, ...meta } = info
      const yaml = yamlifyObject(meta, {
        colors: yamlifyColors,
      })
      return `[${level}] ${colors.grey(timestamp)} ${message}${yaml}`
    })
  )
