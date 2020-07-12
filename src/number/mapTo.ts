import { Unit } from '../core/Unit'

export const mapTo = <T extends number = number>(
  outMin: number,
  outMax: number,
  unit: Unit
): T => {
  return (outMin * (1 - unit) + outMax * unit) as T
}
