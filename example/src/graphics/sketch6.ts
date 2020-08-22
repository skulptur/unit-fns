import { center, angle } from '../../../src'

export const sketch6 = (x: number, y: number) => {
  const centerX = center(x)
  const centerY = center(y)
  const centerAngle = angle(centerX, centerY)
  return centerAngle
}
