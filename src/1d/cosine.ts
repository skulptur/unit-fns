import { Unit } from '../core/Unit'
import { HALF_PI } from '../constants'

export const cosine = (unit: Unit): Unit => {
  return Math.cos(unit * HALF_PI) as Unit
}
