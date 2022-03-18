import { angle, repeat, center, offset, sine, triangle } from '../../../src'

export const animation1 = (x: number, y: number, z: number) => {
  return angle(repeat(center(x), center(y)), offset(triangle(x), sine(z)))
}
