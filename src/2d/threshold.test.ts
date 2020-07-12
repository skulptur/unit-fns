import { threshold } from './threshold'
import { Unit } from '../core/Unit'
import { unitMin } from '../core/unitMin'
import { unitMax } from '../core/unitMax'

describe('threshold', () => {
  it('returns unitMin for below threshold and unitMax for equal and above', () => {
    expect(threshold(0.5 as Unit, -1 as Unit)).toBe(unitMin)
    expect(threshold(0.5 as Unit, 0 as Unit)).toBe(unitMin)
    expect(threshold(0.5 as Unit, 0.49 as Unit)).toBe(unitMin)
    expect(threshold(0.5 as Unit, 0.5 as Unit)).toBe(unitMax)
    expect(threshold(0.5 as Unit, 0.51 as Unit)).toBe(unitMax)
    expect(threshold(0.5 as Unit, 1 as Unit)).toBe(unitMax)
  })
})
