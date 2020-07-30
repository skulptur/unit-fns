import { angle, repeat, center } from '../../../src'

export const sketch3 = (x: number, y: number) => {
  return repeat(0.5, angle(center(x), center(y)))
}
