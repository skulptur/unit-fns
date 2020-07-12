import { wrap } from './wrap'

// TODO: check implications of having wrap be inclusive and if this is the correct expectation
describe('wrap', () => {
  it('leaves numbers between 0-1 inclusive intact', () => {
    expect(wrap(0.5)).toBe(0.5)
    expect(wrap(0)).toBe(0)
    expect(wrap(1)).toBe(1)
  })

  it('works correctly with positive numbers', () => {
    expect(wrap(2.5)).toBe(0.5)
    expect(wrap(2)).toBe(1)
  })

  it('works correctly with negative numbers', () => {
    expect(wrap(-0.25)).toBe(0.75)
    expect(wrap(-1.25)).toBe(0.75)
    expect(wrap(-1.5)).toBe(0.5)
    expect(wrap(-1)).toBe(1)
    expect(wrap(-2)).toBe(1)
  })
})
