import { UnitFunction1d } from './UnitFunction1d'
import { Unit } from '../core/Unit'
import { HALF_PI } from '../constants'

export const cosine: UnitFunction1d = unit => {
  return Math.cos(unit * HALF_PI) as Unit
}
