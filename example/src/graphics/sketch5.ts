import { radial } from '../../../src'
import { createNoise3d } from 'random-fns'

const noise3d = createNoise3d(0)

const detailAmount = 100

export const sketch5 = (x: number, y: number) => {
  const centerAngle = radial(x, y) * detailAmount

  return noise3d(x, y, centerAngle)
}
