import {
  bounce,
  center,
  circular,
  cosine,
  cubic,
  exponential,
  inverse,
  linear,
  quadratic,
  quartic,
  quintic,
  sine,
  triangle,
} from './unary'
import { Unit } from './core'
import { validateUnaryUnitFn } from './utils/testUtils'

describe('unary functions', () => {
  it('always return numbers within 0..1 when given 0..1 as parameters', () => {
    expect(validateUnaryUnitFn(bounce)).toBe(true)
    expect(validateUnaryUnitFn(center)).toBe(true)
    expect(validateUnaryUnitFn(circular)).toBe(true)
    expect(validateUnaryUnitFn(cosine)).toBe(true)
    expect(validateUnaryUnitFn(cubic)).toBe(true)
    expect(validateUnaryUnitFn(exponential)).toBe(true)
    expect(validateUnaryUnitFn(inverse)).toBe(true)
    expect(validateUnaryUnitFn(linear)).toBe(true)
    expect(validateUnaryUnitFn(quadratic)).toBe(true)
    expect(validateUnaryUnitFn(quartic)).toBe(true)
    expect(validateUnaryUnitFn(quintic)).toBe(true)
    expect(validateUnaryUnitFn(sine)).toBe(true)
    expect(validateUnaryUnitFn(triangle)).toBe(true)
  })
})

describe('inverse', () => {
  it('inverse linear', () => {
    expect(inverse(0)).toBe(1)
    expect(inverse(0.25)).toBe(0.75)
    expect(inverse(0.5)).toBe(0.5)
    expect(inverse(1)).toBe(0)
  })
})

describe('linear', () => {
  it('works as identity for Unit', () => {
    expect(linear(0)).toBe(0)
    expect(linear(0.25)).toBe(0.25)
    expect(linear(0.5)).toBe(0.5)
    expect(linear(1)).toBe(1)
  })
})

// describe('round', () => {
//   it('rounds to nearest Unit boundary', () => {
//     expect(round(-1  )).toBe(unitMin)
//     expect(round(0  )).toBe(unitMin)
//     expect(round(0.49  )).toBe(unitMin)
//     expect(round(0.5  )).toBe(unitMax)
//     expect(round(0.51  )).toBe(unitMax)
//     expect(round(2  )).toBe(unitMax)
//   })
// })
