import {
  sampleUnaryFn,
  center,
  angle,
  repeat,
  inverse,
  difference,
  lookup,
} from '../../../src'
import { random } from 'random-fns'

const cachedRandom = sampleUnaryFn(10, random)

export const sketch4 = (x: number, y: number) => {
  const centerX = center(x)
  const centerY = center(y)
  const centerAngle = angle(centerX, centerY)
  return repeat(
    lookup(centerAngle, cachedRandom),
    difference(centerAngle, inverse(centerAngle))
  )
}
