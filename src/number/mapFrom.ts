import { Unit } from '../core/Unit'
import { unitMin } from '../core/unitMin'
import { unitMax } from '../core/unitMax'
import { mapRange } from './mapRange'

export const mapFrom = (inMin: number, inMax: number, value: number): Unit => {
  return mapRange(inMin, inMax, unitMin, unitMax, value)
}
