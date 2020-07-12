import { subdivision } from './subdivision'

describe('subdivision', () => {
  it('divides 1 by number', () => {
    expect(subdivision(5)).toBe(1 / 5)
    expect(subdivision(10)).toBe(1 / 10)
  })

  it('handles numbers that are less than 1', () => {
    // TODO: consider throwing error if input is less than 1
    expect(subdivision(0)).toBe(Infinity)
  })
})
