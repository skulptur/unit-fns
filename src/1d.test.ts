import { inverse, linear, round } from './1d'
import { Unit } from './core/Unit'
import { unitMin } from './core/unitMin'
import { unitMax } from './core/unitMax'

describe('inverse', () => {
  it('inverse linear', () => {
    expect(inverse(0 as Unit)).toBe(1)
    expect(inverse(0.25 as Unit)).toBe(0.75)
    expect(inverse(0.5 as Unit)).toBe(0.5)
    expect(inverse(1 as Unit)).toBe(0)
  })
})

describe('linear', () => {
  it('works as identity for Unit', () => {
    expect(linear(0 as Unit)).toBe(0)
    expect(linear(0.25 as Unit)).toBe(0.25)
    expect(linear(0.5 as Unit)).toBe(0.5)
    expect(linear(1 as Unit)).toBe(1)
  })
})

describe('round', () => {
  it('rounds to nearest Unit boundary', () => {
    expect(round(-1 as Unit)).toBe(unitMin)
    expect(round(0 as Unit)).toBe(unitMin)
    expect(round(0.49 as Unit)).toBe(unitMin)
    expect(round(0.5 as Unit)).toBe(unitMax)
    expect(round(0.51 as Unit)).toBe(unitMax)
    expect(round(2 as Unit)).toBe(unitMax)
  })
})
