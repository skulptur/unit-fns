import { Unit } from '../core/Unit'
import { unitMin } from '../core/unitMin'
import { unitMax } from '../core/unitMax'

export const clip = (value: number): Unit => {
  return Math.max(unitMin, Math.min(unitMax, value)) as Unit
}
