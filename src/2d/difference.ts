import { Unit } from '../core/Unit'

export const difference = (a: Unit, b: Unit): Unit => {
  return Math.abs(a - b)
}
