import {
  linear,
  invert,
  triangle,
  center,
  sineIn,
  sineOut,
  sineInOut,
  cosine,
  quadraticIn,
  quadraticOut,
  quadraticInOut,
  cubicIn,
  cubicOut,
  cubicInOut,
  quarticIn,
  quarticOut,
  quarticInOut,
  quintic,
  easeOutQuint,
  easeInOutQuint,
  exponentialIn,
  exponentialOut,
  exponentialInOut,
  circularIn,
  circularOut,
  circularInOut,
  bounceIn,
  bounceOut,
  bounceInOut,
} from './unary'
import { validateUnaryUnitFn } from './utils/testUtils'

describe('unary functions', () => {
  it('always return numbers within 0..1 when given 0..1 as parameters', () => {
    expect(validateUnaryUnitFn(linear)).toBe(true)
    expect(validateUnaryUnitFn(invert)).toBe(true)
    expect(validateUnaryUnitFn(triangle)).toBe(true)
    expect(validateUnaryUnitFn(center)).toBe(true)
    expect(validateUnaryUnitFn(sineIn)).toBe(true)
    expect(validateUnaryUnitFn(sineOut)).toBe(true)
    expect(validateUnaryUnitFn(sineInOut)).toBe(true)
    expect(validateUnaryUnitFn(cosine)).toBe(true)
    expect(validateUnaryUnitFn(quadraticIn)).toBe(true)
    expect(validateUnaryUnitFn(quadraticOut)).toBe(true)
    expect(validateUnaryUnitFn(quadraticInOut)).toBe(true)
    expect(validateUnaryUnitFn(cubicIn)).toBe(true)
    expect(validateUnaryUnitFn(cubicOut)).toBe(true)
    expect(validateUnaryUnitFn(cubicInOut)).toBe(true)
    expect(validateUnaryUnitFn(quarticIn)).toBe(true)
    expect(validateUnaryUnitFn(quarticOut)).toBe(true)
    expect(validateUnaryUnitFn(quarticInOut)).toBe(true)
    expect(validateUnaryUnitFn(quintic)).toBe(true)
    expect(validateUnaryUnitFn(easeOutQuint)).toBe(true)
    expect(validateUnaryUnitFn(easeInOutQuint)).toBe(true)
    expect(validateUnaryUnitFn(exponentialIn)).toBe(true)
    expect(validateUnaryUnitFn(exponentialOut)).toBe(true)
    expect(validateUnaryUnitFn(exponentialInOut)).toBe(true)
    expect(validateUnaryUnitFn(circularIn)).toBe(true)
    expect(validateUnaryUnitFn(circularOut)).toBe(true)
    expect(validateUnaryUnitFn(circularInOut)).toBe(true)
    expect(validateUnaryUnitFn(bounceIn)).toBe(true)
    expect(validateUnaryUnitFn(bounceOut)).toBe(true)
    expect(validateUnaryUnitFn(bounceInOut)).toBe(true)
  })
})
