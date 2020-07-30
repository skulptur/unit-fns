import { Unit } from '../core/Unit'

export const exponential = (unit: Unit): Unit => {
  return (unit === 0 ? 0 : Math.pow(2, 10 * unit - 10)) as Unit
}
