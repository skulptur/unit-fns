import { Unit } from '../core/Unit'

export const peak = (peak: Unit, unit: Unit): Unit => {
  return unit < peak ? unit / peak : ((unit - peak) * -1) / (1 - peak) + 1
}
