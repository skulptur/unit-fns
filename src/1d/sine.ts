import { Unit } from '../core/Unit'
import { HALF_PI } from '../constants'

export const sine = (unit: Unit): Unit => {
  return Math.sin(unit * HALF_PI) as Unit
}
