import { Unit, radiansToUnit } from '.'
import { HALF_PI } from './constants'
import { threshold } from './2d/threshold'

export const round = (x: Unit): Unit => {
  return threshold(0.5, x)
}

// TODO: rename
const atan = (x: Unit) => radiansToUnit(Math.atan(x))

export const bounce = (x: Unit): Unit => {
  const n1 = 7.5625
  const d1 = 2.75

  if (x < 1 / d1) {
    return n1 * x * x
  } else if (x < 2 / d1) {
    const a = x - 1.5 / d1
    return n1 * a * a + 0.75
  } else if (x < 2.5 / d1) {
    const a = x - 2.25 / d1
    return n1 * a * a + 0.9375
  } else {
    const a = x - 2.625 / d1
    return n1 * a * a + 0.984375
  }
}

export const center = (x: Unit): Unit => {
  return Math.abs(x * 2 - 1)
}

export const circular = (x: Unit): Unit => {
  return 1 - Math.sqrt(1 - Math.pow(x, 2))
}

export const cosine = (x: Unit): Unit => {
  return Math.cos(x * HALF_PI)
}

export const cubic = (x: Unit): Unit => {
  return x * x * x
}

export const exponential = (x: Unit): Unit => {
  return x === 0 ? 0 : Math.pow(2, 10 * x - 10)
}

export const inverse = (x: Unit): Unit => {
  return 1 - x
}

export const linear = (x: Unit): Unit => {
  return x
}

export const quadratic = (x: Unit): Unit => {
  return x * x
}

export const quartic = (x: Unit): Unit => {
  return x * x * x * x
}

export const quintic = (x: Unit): Unit => {
  return x * x * x * x * x
}

export const sine = (x: Unit): Unit => {
  return Math.sin(x * HALF_PI)
}

export const triangle = (x: Unit): Unit => {
  return 1 - Math.abs(x * 2 - 1)
}
