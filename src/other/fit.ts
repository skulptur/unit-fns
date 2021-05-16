import { Unit } from '../core/Unit'
import { repeat } from '../2d/repeat'
import { subdivision } from '../number/subdivision'
import { toIndex } from '../number/toIndex'

export const fit = (fns: Array<(unit: Unit) => Unit>, unit: Unit): Unit => {
  const fnsLength = fns.length
  const t = repeat(subdivision(fnsLength), unit)
  const fn = fns[toIndex(fnsLength, unit)]

  return fn(t)
}
