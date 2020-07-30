import { Unit } from '../core/Unit'

export const quintic = (unit: Unit): Unit => {
  return (unit * unit * unit * unit * unit) as Unit
}
