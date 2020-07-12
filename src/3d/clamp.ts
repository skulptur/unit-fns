import { UnitFunction3d } from './UnitFunction3d'

export const clamp: UnitFunction3d = (min, max, val) => {
  return val > max ? max : val < min ? min : val
}
