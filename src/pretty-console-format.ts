import { Format, format, TransformableInfo } from 'logform'
import yamlifyObject from 'yamlify-object'
import yamlifyColors from 'yamlify-object-colors'
import * as colors from 'colors'

export const prettyConsoleFormat = (): Format | undefined => {
  try {
    return format.combine(
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
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(
      "Failed to create pretty console format, most likely missing (dev) dependencies 'yamlify-object', 'yamlify-object-colors', 'colors'",
      e
    )
    return undefined
  }
}
