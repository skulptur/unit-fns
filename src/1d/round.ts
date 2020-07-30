import { threshold } from '../2d/threshold'
import { Unit } from '../core/Unit'

export const round = (unit: Unit): Unit => {
  return threshold(0.5 as Unit, unit)
}
