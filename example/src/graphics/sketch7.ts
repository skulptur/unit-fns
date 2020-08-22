import { createNoise2d, radial, center } from '../../../src'

const noise2d = createNoise2d(0)

const detailAmount = 250

export const sketch7 = (x: number, y: number) => {
  const centerX = center(x)
  const centerY = center(y)
  const centerAngle = radial(x, y) * detailAmount

  return noise2d(centerX * centerAngle, centerY * centerAngle)
}
