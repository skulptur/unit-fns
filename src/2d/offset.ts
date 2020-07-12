import { wrap } from '../number/wrap'
import { UnitFunction2d } from './UnitFunction2d'

export const offset: UnitFunction2d = (amount, unit) => {
  return wrap(amount + unit)
}
