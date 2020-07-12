import { mix } from './mix'
import { Unit } from '../core/Unit'

describe('mix', () => {
  it('performs linear interpolation', () => {
    expect(mix(0.25 as Unit, 0.75 as Unit, 0 as Unit)).toBe(0.25)
    expect(mix(0.25 as Unit, 0.75 as Unit, 0.25 as Unit)).toBe(0.375)
    expect(mix(0.25 as Unit, 0.75 as Unit, 0.5 as Unit)).toBe(0.5)
    expect(mix(0.25 as Unit, 0.75 as Unit, 0.75 as Unit)).toBe(0.625)
    expect(mix(0.25 as Unit, 0.75 as Unit, 1 as Unit)).toBe(0.75)
  })
})
