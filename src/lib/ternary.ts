import { Unit } from 'lib/core'

export const clamp = (min: Unit, max: Unit, val: Unit): Unit => {
  return val > max ? max : val < min ? min : val
}

export const mix = (outMin: Unit, outMax: Unit, unit: Unit): Unit => {
  return outMin * (1 - unit) + outMax * unit
}

export const toggle = (a: Unit, b: Unit, t: Unit): Unit => {
  return t < 0.5 ? a : b
}