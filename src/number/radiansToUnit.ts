import { Unit } from '../core/Unit'
import { wrap } from './wrap'
import { HALF_PI } from '../constants'

export const radiansToUnit = (radians: number): Unit => {
  return wrap(radians / HALF_PI)
}
