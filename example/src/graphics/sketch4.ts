import {
  createNearestLookup,
  random,
  center,
  angle,
  repeat,
  distance,
  inverse,
  difference,
} from '../../../src'

const cachedRandom = createNearestLookup(10, random)

export const sketch4 = (x: number, y: number) => {
  const centerX = center(x)
  const centerY = center(y)
  const centerAngle = angle(centerX, centerY)
  return repeat(
    cachedRandom(centerAngle),
    difference(centerAngle, inverse(centerAngle))
  )
}
