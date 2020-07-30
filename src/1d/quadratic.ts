import { Unit } from '../core/Unit'

export const quadratic = (unit: Unit): Unit => {
  return (unit * unit) as Unit
}
