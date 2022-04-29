import { Unit } from './core'
import { radiansToUnit, wrapInclusive } from './number'
import { createBands } from './utils'
import { unitMax } from './core'
import { unitMin } from './core'

export const angle = (x: Unit, y: Unit): Unit => {
  return radiansToUnit(Math.atan(y / x))
}

export const difference = (x: Unit, y: Unit): Unit => {
  return Math.abs(x - y)
}

export const distance = (x: Unit, y: Unit): Unit => {
  return Math.sqrt(x * x + y * y) / Math.SQRT2
}

export const maximum = Math.max as (x: Unit, y: Unit) => Unit

export const minimum = Math.min as (x: Unit, y: Unit) => Unit

export const multiply = (x: Unit, y: Unit): Unit => {
  return (x * y) as Unit
}

export const offset = (amount: Unit, unit: Unit): Unit => {
  return wrapInclusive(amount + unit)
}

export const peak = (peak: Unit, unit: Unit): Unit => {
  return unit < peak ? unit / peak : ((unit - peak) * -1) / (1 - peak) + 1
}

export const quantize = createBands(Math.floor)

// TODO: is this unit and should it be in this dir?
export const radial = (x: number, y: number) => {
  return 1 - distance(x * 2 - 1, y * 2 - 1)
}

export const repeat = (scale: Unit, t: Unit): Unit => {
  // if (scale === 0) return t
  const times = 1 / scale
  return ((t * times) % 1) as Unit
}

export const threshold = (threshold: Unit, t: Unit): Unit => {
  return t < threshold ? unitMin : unitMax
}
