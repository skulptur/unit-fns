import { Unit } from '../core/Unit'
import { repeat } from '../2d/repeat'
import { fraction } from '../number/fraction'
import { toIndex } from '../number/toIndex'

export const fit = (fns: Array<(unit: Unit) => Unit>, unit: Unit): Unit => {
  const fnsLength = fns.length
  const t = repeat(fraction(fnsLength), unit)
  const fn = fns[toIndex(fnsLength, unit)]

  return fn(t)
}
