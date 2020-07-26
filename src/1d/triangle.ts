import { UnitFunction1d } from './UnitFunction1d'
import { Unit } from '../core/Unit'
import { peak } from '../2d/peak'

const half = 0.5 as Unit

export const triangle: UnitFunction1d = unit => {
  return peak(half, unit)
}
