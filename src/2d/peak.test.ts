import { peak } from './peak'
import { unitMin } from '../core/unitMin'
import { unitMax } from '../core/unitMax'
import { Unit } from '../core/Unit'

describe('peak', () => {
  it('creates a ramp that goes from 0 to 1 at peak position and then back down to 0', () => {
    expect(peak(0.25 as Unit, 0.25 as Unit)).toBe(1)
    expect(peak(0.25 as Unit, 0.5 as Unit)).toBe(0.6666666666666667)
    expect(peak(0.25 as Unit, 0.75 as Unit)).toBe(0.33333333333333337)
    expect(peak(0.25 as Unit, unitMin)).toBe(0)
    expect(peak(0.25 as Unit, unitMax)).toBe(0)

    expect(peak(0.5 as Unit, 0.25 as Unit)).toBe(0.5)
    expect(peak(0.5 as Unit, 0.5 as Unit)).toBe(1)
    expect(peak(0.5 as Unit, 0.75 as Unit)).toBe(0.5)
    expect(peak(0.5 as Unit, unitMin)).toBe(0)
    expect(peak(0.5 as Unit, unitMax)).toBe(0)
  })
})
