import { Unit } from '../core/Unit'
import { toIndex } from '../number/toIndex'

export const fitSteps = (steps: ReadonlyArray<Unit>, unit: Unit): Unit => {
  return steps[toIndex(steps.length, unit)]
}
