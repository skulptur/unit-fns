import { mapFrom } from './mapFrom'

describe('mapFrom', () => {
  it('map numbers in given range to Unit', () => {
    expect(mapFrom(50, 100, 0)).toBe(-1)
    expect(mapFrom(50, 100, 50)).toBe(0)
    expect(mapFrom(50, 100, 75)).toBe(0.5)
    expect(mapFrom(50, 100, 100)).toBe(1)
    expect(mapFrom(50, 100, 200)).toBe(3)
  })
})
