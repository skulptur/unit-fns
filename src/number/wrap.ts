import { unitMax } from '../core/unitMax'
import { Unit } from '../core/Unit'
import { isUnit } from '../core/isUnit'

export const wrap = (value: number): Unit => {
  if (isUnit(value)) return value

  if (value % 1 === 0) return 1 as Unit

  return (value < 0 ? unitMax - (-value % unitMax) : value % unitMax) as Unit
}
