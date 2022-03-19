import { angle, repeat, center, offset } from '../../../src'

export const animation3 = (x: number, y: number, z: number) => {
  const centerZ = center(z)
  const xCoord = angle(center(offset(x, z)), centerZ)
  const yCoord = angle(centerZ, center(offset(y, z)))

  return repeat(xCoord, yCoord)
}
