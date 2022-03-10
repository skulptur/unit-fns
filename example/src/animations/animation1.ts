import { branch, repeat, inverse, triangle } from '../../../src'

export const animation1 = (x: number, y: number) => {
  const xCoord = inverse(triangle(x))
  const yCoord = inverse(triangle(y))

  return branch(
    () => repeat(xCoord, x),
    () => repeat(yCoord, y),
    repeat(xCoord, yCoord)
  )
}
