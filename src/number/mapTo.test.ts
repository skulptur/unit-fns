import { mapTo } from './mapTo'
import { Unit } from '../core/Unit'

describe('mapTo', () => {
  it('map Unit to given range', () => {
    expect(mapTo(50, 100, 0 as Unit)).toBe(50)
    expect(mapTo(50, 100, 0.5 as Unit)).toBe(75)
    expect(mapTo(50, 100, 1 as Unit)).toBe(100)
  })
})
