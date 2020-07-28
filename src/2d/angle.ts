import { Unit } from '../core/Unit'
import { radiansToUnit } from '../number/radiansToUnit'

export const angle = (x: Unit, y: Unit): Unit => {
  return radiansToUnit(Math.atan(y / x))
}
