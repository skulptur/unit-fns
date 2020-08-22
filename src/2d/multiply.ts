import { Unit } from '../core/Unit'

export const multiply = (a: Unit, b: Unit): Unit => {
  return (a * b) as Unit
}
