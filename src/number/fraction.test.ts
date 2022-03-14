import { fraction } from './fraction'

describe('fraction', () => {
  it('divides 1 by number', () => {
    expect(fraction(5)).toBe(1 / 5)
    expect(fraction(10)).toBe(1 / 10)
  })

  it('handles numbers that are less than 1', () => {
    // TODO: consider throwing error if input is less than 1
    expect(fraction(0)).toBe(Infinity)
  })
})
