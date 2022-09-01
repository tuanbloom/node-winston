import { prettyConsoleFormat } from './pretty-console-format'
import { levels } from 'logform'
import { configs } from 'triple-beam'

describe('prettyConsoleFormat', () => {
  it('can be invoked', () => {
    const format = prettyConsoleFormat()
    expect(format).toBeDefined()
  })
  it('allows transform to be invoked', () => {
    // Setup log levels for cli
    levels(configs.cli)
    const format = prettyConsoleFormat()
    format.transform({
      [Symbol.for('level')]: 'info',
      level: 'info',
      message: 'Testing testing 123',
    })
  })
})
