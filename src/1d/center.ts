import { Unit } from '../'

export const center = (unit: Unit): Unit => {
  return Math.abs(unit * 2 - 1)
}
