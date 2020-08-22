import { Unit } from '../core/Unit'

export const distance = (x: Unit, y: Unit): Unit => {
  return Math.sqrt(x * x + y * y) / Math.SQRT2
}
