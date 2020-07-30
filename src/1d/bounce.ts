import { Unit } from '../core/Unit'

export const bounce = (unit: Unit): Unit => {
  const n1 = 7.5625
  const d1 = 2.75

  if (unit < 1 / d1) {
    return (n1 * unit * unit) as Unit
  } else if (unit < 2 / d1) {
    const a = unit - 1.5 / d1
    return (n1 * a * a + 0.75) as Unit
  } else if (unit < 2.5 / d1) {
    const a = unit - 2.25 / d1
    return (n1 * a * a + 0.9375) as Unit
  } else {
    const a = unit - 2.625 / d1
    return (n1 * a * a + 0.984375) as Unit
  }
}
