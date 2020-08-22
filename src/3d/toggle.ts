import { Unit } from 'core/Unit'

export const toggle = (a: Unit, b: Unit, t: Unit): Unit => {
  return t < 0.5 ? a : b
}
