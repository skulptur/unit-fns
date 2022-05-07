import { Unit } from 'lib/core'

export const clamp = (min: Unit, max: Unit, val: Unit): Unit => {
  return val > max ? max : val < min ? min : val
}

export const mix = (outMin: Unit, outMax: Unit, unit: Unit): Unit => {
  return outMin * (1 - unit) + outMax * unit
}

export const step = (a: Unit, b: Unit, t: Unit): Unit => {
  return t < 0.5 ? a : b
}

export const smoothstep = (a: Unit, b: Unit, t: Unit) => {
  const x = Math.max(0, Math.min(1, (t - a) / (b - a)))
  return x * x * (3 - 2 * x)
}
