import { Unit } from '../core/Unit'

export const fractional = (value: number): Unit => {
  return Math.abs(value % 1) as Unit
}
