import { branch, repeat, center, offset } from '../../../src'

export const animation2 = (x: number, y: number, z: number) => {
  const xCoord = center(offset(z, x))
  const yCoord = center(offset(z, y))

  return branch(
    () => repeat(x, xCoord),
    () => repeat(y, yCoord),
    repeat(offset(xCoord, z), offset(yCoord, z))
  )
}
