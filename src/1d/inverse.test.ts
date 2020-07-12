import { inverse } from './inverse'
import { Unit } from '../core/Unit'

describe('inverse', () => {
  it('inverse linear', () => {
    expect(inverse(0 as Unit)).toBe(1)
    expect(inverse(0.25 as Unit)).toBe(0.75)
    expect(inverse(0.5 as Unit)).toBe(0.5)
    expect(inverse(1 as Unit)).toBe(0)
  })
})
