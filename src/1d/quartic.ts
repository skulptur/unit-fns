import { Unit } from '../core/Unit'

export const quartic = (t: Unit): Unit => {
  return (t * t * t * t) as Unit
}
