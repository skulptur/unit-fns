import { Unit } from '../core/Unit'
import { unitMax } from '../core/unitMax'

export const subdivision = (value: number): Unit => {
  return (unitMax / value) as Unit
}
