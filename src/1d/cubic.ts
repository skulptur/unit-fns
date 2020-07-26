import { Unit } from '../core/Unit'

export const cubic = (t: Unit): Unit => {
  return (t * t * t) as Unit
}
