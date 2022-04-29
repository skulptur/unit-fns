import { Unit, unitMax } from './core'
import { quantize, repeat } from './binary'
import { fraction, toIndex } from './number'

export const branch = (
  a: (unit: Unit) => Unit,
  b: (unit: Unit) => Unit,
  unit: Unit
) => {
  return unit > 0.5 ? b(unit) : a(unit)
}

export const fit = (fns: Array<(unit: Unit) => Unit>, unit: Unit): Unit => {
  const fnsLength = fns.length
  const t = repeat(fraction(fnsLength), unit)
  const fn = fns[toIndex(fnsLength, unit)]

  return fn(t)
}

export const fitSteps = (steps: Array<Unit>, unit: Unit): Unit => {
  return steps[toIndex(steps.length, unit)]
}

export const createBands = (fn: typeof Math.round) => (
  fraction: Unit,
  value: Unit
): Unit => {
  if (fraction === 0) return value

  const bands = unitMax / fraction

  return fn(value * bands) / bands
}

export const createNearestLookup = (
  length: number,
  onSample: (unit: Unit) => Unit
) => {
  // TODO: could it be 32? or even pass the constructor in so it can be chosen from the outside :`)
  const lookupTable = new Float64Array(length)

  for (let i = 0; i < length; i++) {
    lookupTable[i] = onSample(i / length)
  }

  return (unit: Unit) => {
    return lookupTable[toIndex(length, unit)]
  }
}

export const createTiles = (
  gridX: number,
  gridY: number,
  fn3d: (x: Unit, y: Unit, z: Unit) => Unit
) => {
  const fractionX = 1 / gridX
  const fractionY = 1 / gridY

  const frac = 2 / (gridX + gridY)

  return (x: Unit, y: Unit): Unit => {
    const z = quantize(fractionY, y) + quantize(fractionX, x) * frac
    return fn3d(repeat(fractionX, x), repeat(fractionY, y), z)
  }
}
