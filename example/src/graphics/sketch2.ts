import { radial } from '../../../src'
import { sketch1 } from './sketch1'

export const sketch2 = (x: number, y: number) => {
  return sketch1(x, radial(x, y))
}
