import { Unit } from '../core/Unit'

export const exponential = (t: Unit): Unit => {
  return (t === 0 ? 0 : Math.pow(2, 10 * t - 10)) as Unit
}
