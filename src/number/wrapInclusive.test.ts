import { wrapInclusive } from './wrapInclusive'

describe('wrapInclusive', () => {
  it('leaves numbers between 0-1 inclusive intact', () => {
    expect(wrapInclusive(0.5)).toBe(0.5)
    expect(wrapInclusive(0)).toBe(0)
    expect(wrapInclusive(1)).toBe(1)
  })

  it('works correctly with positive numbers', () => {
    expect(wrapInclusive(2.5)).toBe(0.5)
    expect(wrapInclusive(2)).toBe(1)
  })

  it('works correctly with negative numbers', () => {
    expect(wrapInclusive(-0.25)).toBe(0.75)
    expect(wrapInclusive(-1.25)).toBe(0.75)
    expect(wrapInclusive(-1.5)).toBe(0.5)
    expect(wrapInclusive(-1)).toBe(1)
    expect(wrapInclusive(-2)).toBe(1)
  })
})
