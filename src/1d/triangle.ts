import { Unit } from '../core/Unit'

export const triangle = (unit: Unit): Unit => {
  return 1 - Math.abs(unit * 2 - 1)
}
