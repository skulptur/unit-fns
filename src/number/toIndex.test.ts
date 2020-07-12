import { toIndex } from './toIndex'
import { Unit } from '../core/Unit'

describe('toIndex', () => {
  it('gets an index based on length and Unit', () => {
    const testArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    expect(toIndex(testArr.length, 0 as Unit)).toBe(0)
    expect(toIndex(testArr.length, 1 as Unit)).toBe(10)
    expect(toIndex(testArr.length, 0.5 as Unit)).toBe(5)
  })
})
