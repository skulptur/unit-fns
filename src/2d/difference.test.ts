import { difference } from './difference'
import { unitMin } from '../core/unitMin'
import { unitMax } from '../core/unitMax'
import { Unit } from '../core/Unit'

describe('difference', () => {
  it('the absolute difference between two units', () => {
    expect(difference(0.5 as Unit, 0.25 as Unit)).toBe(0.25)
    expect(difference(0.5 as Unit, 0.5 as Unit)).toBe(0)
    expect(difference(0.5 as Unit, 0.75 as Unit)).toBe(0.25)
    expect(difference(0.5 as Unit, unitMin)).toBe(0.5)
    expect(difference(0.5 as Unit, unitMax)).toBe(0.5)
  })
})
