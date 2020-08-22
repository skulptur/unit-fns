import { distance } from './distance'

// TODO: is this unit and should it be in this dir?
export const radial = (x: number, y: number) => {
  return 1 - distance(x * 2 - 1, y * 2 - 1)
}
