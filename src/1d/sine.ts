import { UnitFunction1d } from './UnitFunction1d'
import { Unit } from '../core/Unit'
import { HALF_PI } from '../constants'

export const sine: UnitFunction1d = unit => {
  return Math.sin(unit * HALF_PI) as Unit
}
