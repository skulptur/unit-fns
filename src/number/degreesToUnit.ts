import { Unit } from '../core/Unit'
import { wrap } from './wrap'

export const degreesToUnit = (degrees: number): Unit => {
  return wrap(degrees / 360)
}
