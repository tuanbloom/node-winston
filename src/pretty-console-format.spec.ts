import { prettyConsoleFormat } from './pretty-console-format'

describe('prettyConsoleFormat', () => {
  it('can be invoked', () => {
    const format = prettyConsoleFormat()

    expect(format).toBeDefined()
  })
  it('allows transform to be invoked', () => {
    const format = prettyConsoleFormat()
    format.transform({
      [Symbol.for('level')]: 'info',
      level: 'info',
      message: 'Testing testing 123',
    })
  })
})
