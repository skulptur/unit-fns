import { Unit } from '../core/Unit'

export const toIndex = (length: number, unit: Unit): number => {
  return Math.floor(unit * length)
}
