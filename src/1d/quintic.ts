import { Unit } from '../core/Unit'

export const quintic = (t: Unit): Unit => {
  return (t * t * t * t * t) as Unit
}
