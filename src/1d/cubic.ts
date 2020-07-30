import { Unit } from '../core/Unit'

export const cubic = (unit: Unit): Unit => {
  return (unit * unit * unit) as Unit
}
