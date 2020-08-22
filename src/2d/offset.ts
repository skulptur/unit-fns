import { wrap } from '../number/wrap'
import { Unit } from 'core/Unit'

export const offset = (amount: Unit, unit: Unit): Unit => {
  return wrap(amount + unit)
}
