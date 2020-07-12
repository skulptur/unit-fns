import { clamp } from './clamp'
import { Unit } from '../core/Unit'

describe('clamp', () => {
  it('clips a Unit with the given lower and upper bounds', () => {
    expect(clamp(0.25 as Unit, 0.75 as Unit, 0 as Unit)).toBe(0.25)
    expect(clamp(0.25 as Unit, 0.75 as Unit, 0.25 as Unit)).toBe(0.25)
    expect(clamp(0.25 as Unit, 0.75 as Unit, 0.5 as Unit)).toBe(0.5)
    expect(clamp(0.25 as Unit, 0.75 as Unit, 0.75 as Unit)).toBe(0.75)
    expect(clamp(0.25 as Unit, 0.75 as Unit, 1 as Unit)).toBe(0.75)
  })
})
