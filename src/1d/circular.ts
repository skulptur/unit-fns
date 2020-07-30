import { Unit } from '../core/Unit'

export const circular = (unit: Unit): Unit => {
  return (1 - Math.sqrt(1 - Math.pow(unit, 2))) as Unit
}
