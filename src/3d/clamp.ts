import { Unit } from 'core/Unit'

export const clamp = (min: Unit, max: Unit, val: Unit): Unit => {
  return val > max ? max : val < min ? min : val
}
