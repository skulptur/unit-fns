import { UnitFunction2d } from './UnitFunction2d'
import { unitMax } from '../core/unitMax'
import { unitMin } from '../core/unitMin'

export const threshold: UnitFunction2d = (threshold, t) => {
  return t < threshold ? unitMin : unitMax
}
