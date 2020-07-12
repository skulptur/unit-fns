import { Unit } from '../core/Unit'
import { UnitFunction2d } from './UnitFunction2d'

export const difference: UnitFunction2d = (a, b) => {
  return Math.abs(a - b) as Unit
}
