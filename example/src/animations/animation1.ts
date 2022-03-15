import { branch, repeat, center, offset } from '../../../src'

export const animation1 = (x: number, y: number, z: number) => {
  const xCoord = center(offset(z, x))
  const yCoord = center(offset(z, y))

  return branch(
    () => repeat(xCoord, x),
    () => repeat(yCoord, y),
    repeat(offset(xCoord, z), offset(yCoord, z))
  )
}
