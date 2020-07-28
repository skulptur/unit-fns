import { Unit } from 'core/Unit'

export const branch = (
  a: (unit: Unit) => Unit,
  b: (unit: Unit) => Unit,
  unit: Unit
) => {
  return unit > 0.5 ? b(unit) : a(unit)
}
