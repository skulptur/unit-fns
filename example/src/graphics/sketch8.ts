import { radial, center } from '../../../src'
import { createNoise3d } from 'random-fns'

const noise3d = createNoise3d(0)

const detailAmount = 100

export const sketch8 = (x: number, y: number) => {
  const centerX = center(x)
  const centerY = center(y)
  const centerAngle = radial(x, y) * detailAmount

  return noise3d(centerX, centerY, centerAngle)
}
