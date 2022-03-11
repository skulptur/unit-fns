import { Unit } from '../core/Unit'
import { unitMax } from '../core/unitMax'

const bands = (fn: typeof Math.round) => (
  fraction: Unit,
  value: Unit
): Unit => {
  if (fraction === 0) return value

  const bands = unitMax / fraction

  return fn(value * bands) / bands
}

export const quantize = bands(Math.floor)
