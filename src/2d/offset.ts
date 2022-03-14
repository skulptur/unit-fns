import { wrapInclusive } from '../number/wrapInclusive'
import { Unit } from 'core/Unit'

export const offset = (amount: Unit, unit: Unit): Unit => {
  return wrapInclusive(amount + unit)
}
