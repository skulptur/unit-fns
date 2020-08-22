import { Unit } from '../core/Unit'
import { unitMax } from '../core/unitMax'

export const quantize = (fraction: Unit, value: Unit): Unit => {
  if (fraction === 0) return value

  const bands = unitMax / fraction

  return Math.round(value * bands) / bands
}
