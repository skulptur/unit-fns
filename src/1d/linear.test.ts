import { linear } from './linear'
import { Unit } from '../core/Unit'

describe('linear', () => {
  it('works as identity for Unit', () => {
    expect(linear(0 as Unit)).toBe(0)
    expect(linear(0.25 as Unit)).toBe(0.25)
    expect(linear(0.5 as Unit)).toBe(0.5)
    expect(linear(1 as Unit)).toBe(1)
  })
})
