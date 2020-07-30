import { Unit } from '../core/Unit'

export const quartic = (unit: Unit): Unit => {
  return (unit * unit * unit * unit) as Unit
}
