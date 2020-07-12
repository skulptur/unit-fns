import { Unit } from './Unit'

export const isUnit = (value: number): value is Unit => {
  return value >= 0 && value <= 1
}
