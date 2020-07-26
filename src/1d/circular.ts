import { Unit } from '../core/Unit'

export const circular = (t: Unit): Unit => {
  return (1 - Math.sqrt(1 - Math.pow(t, 2))) as Unit
}
