import {
  threshold,
  repeat,
  quantize,
  peak,
  offset,
  minimum,
  maximum,
  difference,
} from './binary'
import { unitMin, unitMax } from './core'

describe('difference', () => {
  it('the absolute difference between two units', () => {
    expect(difference(0.5, 0.25)).toBe(0.25)
    expect(difference(0.5, 0.5)).toBe(0)
    expect(difference(0.5, 0.75)).toBe(0.25)
    expect(difference(0.5, unitMin)).toBe(0.5)
    expect(difference(0.5, unitMax)).toBe(0.5)
  })
})

describe('maximum', () => {
  it('is an alias to Math.max', () => {
    expect(maximum).toBe(Math.max)
  })
})

describe('minimum', () => {
  it('is an alias to Math.min', () => {
    expect(minimum).toBe(Math.min)
  })
})

describe('offset', () => {
  it('adds both units and wraps the result around', () => {
    expect(offset(0, 0.5)).toBe(0.5)
    expect(offset(0.5, 0.5)).toBe(1)
    expect(offset(1, 0.5)).toBe(0.5)
  })
})

describe('peak', () => {
  it('creates a ramp that goes from 0 to 1 at peak position and then back down to 0', () => {
    expect(peak(0.25, 0.25)).toBe(1)
    expect(peak(0.25, 0.5)).toBe(0.6666666666666667)
    expect(peak(0.25, 0.75)).toBe(0.33333333333333337)
    expect(peak(0.25, unitMin)).toBe(0)
    expect(peak(0.25, unitMax)).toBe(0)

    expect(peak(0.5, 0.25)).toBe(0.5)
    expect(peak(0.5, 0.5)).toBe(1)
    expect(peak(0.5, 0.75)).toBe(0.5)
    expect(peak(0.5, unitMin)).toBe(0)
    expect(peak(0.5, unitMax)).toBe(0)
  })
})

describe('quantize', () => {
  it('quantizes the given unit', () => {
    expect(quantize(0.5, 0.5)).toBe(0.5)

    expect(quantize(1, 0.5)).toBe(1)
    expect(quantize(1, 0)).toBe(0)
  })

  it('handles 0 edge case', () => {
    expect(quantize(0, 0.5)).toBe(0.5)
  })
})

describe('repeat', () => {
  // TODO: add more tests
  it('scales down the values and repeats them in the remaining space', () => {
    expect(repeat(0.5, 0.25)).toBe(0.5)
    expect(repeat(0.5, 0.75)).toBe(0.5)
    expect(repeat(0.25, 0.75)).toBe(1)
  })
})

describe('threshold', () => {
  it('returns unitMin for below threshold and unitMax for equal and above', () => {
    expect(threshold(0.5, -1)).toBe(unitMin)
    expect(threshold(0.5, 0)).toBe(unitMin)
    expect(threshold(0.5, 0.49)).toBe(unitMin)
    expect(threshold(0.5, 0.5)).toBe(unitMax)
    expect(threshold(0.5, 0.51)).toBe(unitMax)
    expect(threshold(0.5, 1)).toBe(unitMax)
  })
})
