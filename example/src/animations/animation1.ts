import { branch, repeat, center } from '../../../src'

export const animation1 = (x: number, y: number, z: number) => {
  const r = repeat(center(z), 1 - center(x) * center(y))
  return r
  const xCoord = center(x)
  const yCoord = center(y)

  const centerZ = center((z + r) / 2)

  return branch(
    () => repeat(xCoord, (centerZ + x) / 2),
    () => repeat(yCoord, (centerZ + y) / 2),
    repeat(xCoord * centerZ, yCoord)
  )
}
