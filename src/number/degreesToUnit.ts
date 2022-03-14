import { Unit } from '../core/Unit'
import { wrapInclusive } from './wrapInclusive'

export const degreesToUnit = (degrees: number): Unit => {
  return wrapInclusive(degrees / 360)
}
