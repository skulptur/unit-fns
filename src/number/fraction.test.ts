import { fraction } from './fraction'

describe('fraction', () => {
  it('gets the fractional part of a number as a Unit', () => {
    expect(fraction(-1.5)).toBe(0.5)
    expect(fraction(-0.75)).toBe(0.75)
    expect(fraction(-1)).toBe(0)
    expect(fraction(0)).toBe(0)
    expect(fraction(0.75)).toBe(0.75)
    expect(fraction(1)).toBe(0)
    expect(fraction(1.5)).toBe(0.5)
  })
})
