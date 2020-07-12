import { offset } from './offset'
import { Unit } from '../core/Unit'

describe('offset', () => {
  it('adds both units and wraps the result around', () => {
    expect(offset(0 as Unit, 0.5 as Unit)).toBe(0.5)
    expect(offset(0.5 as Unit, 0.5 as Unit)).toBe(1)
    expect(offset(1 as Unit, 0.5 as Unit)).toBe(0.5)
  })
})
