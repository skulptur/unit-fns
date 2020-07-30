import { Unit } from '../core/Unit'

export const inverse = (unit: Unit): Unit => {
  return (1 - unit) as Unit
}
