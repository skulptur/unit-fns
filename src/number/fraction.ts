import { Unit } from '../core/Unit'

export const fraction = (value: number): Unit => {
  return Math.abs(value % 1) as Unit
}
