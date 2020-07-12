import { repeat } from './repeat'
import { Unit } from '../core/Unit'

describe('repeat', () => {
  // TODO: add more tests
  it('scales down the values and repeats them in the remaining space', () => {
    expect(repeat(0.5 as Unit, 0.25 as Unit)).toBe(0.5)
    expect(repeat(0.5 as Unit, 0.75 as Unit)).toBe(0.5)
    expect(repeat(0.25 as Unit, 0.75 as Unit)).toBe(1)
  })
})
