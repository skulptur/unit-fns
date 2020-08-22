import { Unit } from 'core/Unit'

export const repeat = (scale: Unit, t: Unit): Unit => {
  const times = 1 / scale
  return ((t * times) % 1) as Unit
}
