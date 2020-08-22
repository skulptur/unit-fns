//  TODO either get a lib or implement a 1d noise solution
import { makeNoise2D } from 'open-simplex-noise'

export const createNoise1d = (seed: number) => {
  const noise2d = makeNoise2D(seed)
  return (x: number) => {
    return noise2d(x, 0)
  }
}
