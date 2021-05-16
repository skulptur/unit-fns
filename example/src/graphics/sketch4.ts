import {
  createNearestLookup,
  center,
  angle,
  repeat,
  inverse,
  difference,
} from '../../../src'
import { random } from 'random-fns'

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
