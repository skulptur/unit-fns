import { Unit } from '../core/Unit'
import { unitMax } from '../core/unitMax'

export const createBands = (fn: typeof Math.round) => (
  fraction: Unit,
  value: Unit
): Unit => {
  if (fraction === 0) return value

  const bands = unitMax / fraction

  return fn(value * bands) / bands
}
