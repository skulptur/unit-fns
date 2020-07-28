import { distance } from './distance'

export const radial = (x: number, y: number) => {
  return 1 - distance(x * 2 - 1, y * 2 - 1)
}
