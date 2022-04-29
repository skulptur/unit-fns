import { Unit, isUnit } from '../lib/core'
import { unitMin } from './core'
import { unitMax } from './core'
import { HALF_PI } from './constants'

export const clip = (value: number): Unit => {
  return Math.max(unitMin, Math.min(unitMax, value)) as Unit
}

export const degreesToUnit = (degrees: number): Unit => {
  return wrapInclusive(degrees / 360)
}

export const fraction = (value: number): Unit => {
  return (unitMax / value) as Unit
}

export const fractional = (value: number): Unit => {
  return Math.abs(value % 1) as Unit
}

export const mapRange = (
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
  value: number
): number => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}

export const mapToUnit = (
  inMin: number,
  inMax: number,
  value: number
): Unit => {
  return mapRange(inMin, inMax, unitMin, unitMax, value)
}

export const radiansToUnit = (radians: number): Unit => {
  return wrap(radians / HALF_PI)
}

export const toIndex = (length: number, unit: Unit): number => {
  return Math.floor(unit * (length - 1))
}

export const wrap = (value: number): Unit => {
  if (isUnit(value)) return value

  return (value < 0 ? unitMax - (-value % unitMax) : value % unitMax) as Unit
}

export const wrapInclusive = (value: number): Unit => {
  if (isUnit(value)) return value

  if (value % 1 === 0) return 1 as Unit

  return (value < 0 ? unitMax - (-value % unitMax) : value % unitMax) as Unit
}
