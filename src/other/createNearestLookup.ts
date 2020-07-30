import { Unit } from '..'
import { toIndex } from '../number/toIndex'

export const createNearestLookup = (
  length: number,
  onSample: (unit: Unit) => Unit
) => {
  // TODO: could it be 32? or even pass the constructor in so it can be chosen from the outside :`)
  const lookupTable = new Float64Array(length)

  for (let i = 0; i < length; i++) {
    lookupTable[i] = onSample(i / length)
  }

  return (unit: Unit) => {
    return lookupTable[toIndex(length, unit)]
  }
}
