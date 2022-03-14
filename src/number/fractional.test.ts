import { fractional } from './fractional'

describe('fractional', () => {
  it('gets the fractional part of a number as a Unit', () => {
    expect(fractional(-1.5)).toBe(0.5)
    expect(fractional(-0.75)).toBe(0.75)
    expect(fractional(-1)).toBe(0)
    expect(fractional(0)).toBe(0)
    expect(fractional(0.75)).toBe(0.75)
    expect(fractional(1)).toBe(0)
    expect(fractional(1.5)).toBe(0.5)
  })
})
