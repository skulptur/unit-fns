import { Unit } from '../core/Unit'
import { UnitFunction2d } from './UnitFunction2d'

export const multiply: UnitFunction2d = (a, b) => {
  return (a * b) as Unit
}
