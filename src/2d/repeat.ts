import { UnitFunction2d } from './UnitFunction2d'
import { Unit } from 'core/Unit'

export const repeat: UnitFunction2d = (scale, t) => {
  const times = 1 / scale
  return ((t * times) % 1) as Unit
}
