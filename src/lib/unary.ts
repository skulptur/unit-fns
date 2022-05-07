import { Unit } from './core'
import { PI, HALF_PI } from './constants'

const pow = Math.pow
const sqrt = Math.sqrt
const sin = Math.sin
const cos = Math.cos
const abs = Math.abs

// --
export const linear = (x: Unit): Unit => {
  return x
}

export const invert = (x: Unit): Unit => {
  return 1 - x
}

// --
export const triangle = (x: Unit): Unit => {
  return 1 - abs(x * 2 - 1)
}

export const center = (x: Unit): Unit => {
  return abs(x * 2 - 1)
}

// --
export const sineIn = (x: Unit): Unit => {
  return 1 - cos(x * HALF_PI)
}

export const sineOut = (x: Unit): Unit => {
  return sin(x * HALF_PI)
}

export const sineInOut = (x: Unit): Unit => {
  return -(cos(PI * x) - 1) / 2
}

// --
export const quadraticIn = (x: Unit): Unit => {
  return x * x
}

export const quadraticOut = (x: Unit): Unit => {
  const invertedX = 1 - x
  return 1 - invertedX * invertedX
}

export const quadraticInOut = (x: Unit): Unit => {
  return x < 0.5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2
}

// --
export const cubicIn = (x: Unit): Unit => {
  return x * x * x
}

export const cubicOut = (x: Unit): Unit => {
  return 1 - pow(1 - x, 3)
}

export const cubicInOut = (x: Unit): Unit => {
  return x < 0.5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2
}

// --
export const quarticIn = (x: Unit): Unit => {
  return x * x * x * x
}

export const quarticOut = (x: Unit): Unit => {
  return 1 - pow(1 - x, 4)
}

export const quarticInOut = (x: Unit): Unit => {
  return x < 0.5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2
}

// --
export const quintic = (x: Unit): Unit => {
  return x * x * x * x * x
}

export const easeOutQuint = (x: Unit): Unit => {
  return 1 - pow(1 - x, 5)
}

export const easeInOutQuint = (x: Unit): Unit => {
  return x < 0.5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2
}

// --
export const exponentialIn = (x: Unit): Unit => {
  return x === 0 ? 0 : pow(2, 10 * x - 10)
}

export const exponentialOut = (x: Unit): Unit => {
  return x === 1 ? 1 : 1 - pow(2, -10 * x)
}

export const exponentialInOut = (x: Unit): Unit => {
  return x === 0
    ? 0
    : x === 1
    ? 1
    : x < 0.5
    ? pow(2, 20 * x - 10) / 2
    : (2 - pow(2, -20 * x + 10)) / 2
}

// --
export const circularIn = (x: Unit): Unit => {
  return 1 - sqrt(1 - pow(x, 2))
}

export const circularOut = (x: Unit): Unit => {
  return sqrt(1 - pow(x - 1, 2))
}

export const circularInOut = (x: Unit): Unit => {
  return x < 0.5
    ? (1 - sqrt(1 - pow(2 * x, 2))) / 2
    : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2
}

// --
export const bounceIn = (x: Unit): Unit => {
  return 1 - bounceOut(1 - x)
}

export const bounceOut = (x: Unit): Unit => {
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

export const bounceInOut = (x: Unit): Unit => {
  return x < 0.5
    ? (1 - bounceOut(1 - 2 * x)) / 2
    : (1 + bounceOut(2 * x - 1)) / 2
}
