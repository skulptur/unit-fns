import { branch, repeat, center } from '../../../src'

export const animation1 = (x: number, y: number, z: number) => {
  const xCoord = center(x)
  const yCoord = center(y)
  const centerZ = center(z)

  return branch(
    () => repeat(xCoord, (centerZ + x) / 2),
    () => repeat(yCoord, (centerZ + y) / 2),
    repeat(xCoord * centerZ, yCoord)
  )
}
