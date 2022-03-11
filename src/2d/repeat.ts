import { Unit } from 'core/Unit'

export const repeat = (scale: Unit, t: Unit): Unit => {
  // if (scale === 0) return t
  const times = 1 / scale
  return ((t * times) % 1) as Unit
}
