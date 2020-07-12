import { quantize } from './quantize'
import { Unit } from '../core/Unit'

describe('quantize', () => {
  it('quantizes the given unit', () => {
    expect(quantize(0.5 as Unit, 0.5 as Unit)).toBe(0.5)

    expect(quantize(1 as Unit, 0.5 as Unit)).toBe(1)
    expect(quantize(1 as Unit, 0 as Unit)).toBe(0)
  })

  it('handles 0 edge case', () => {
    expect(quantize(0 as Unit, 0.5 as Unit)).toBe(0.5)
  })
})
