import {
  angle,
  repeat,
  center,
  offset,
  sine,
  triangle,
  exponential,
} from '../../../src'

export const animation1 = (x: number, y: number, z: number) => {
  return angle(
    repeat(center(x), exponential(offset(z, center(y)))),
    offset(triangle(x), sine(z))
  )
}
