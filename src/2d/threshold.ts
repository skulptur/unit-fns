import { unitMax } from '../core/unitMax'
import { unitMin } from '../core/unitMin'
import { Unit } from 'core/Unit'

export const threshold = (threshold: Unit, t: Unit): Unit => {
  return t < threshold ? unitMin : unitMax
}
