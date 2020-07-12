import { minimum } from './minimum'

describe('minimum', () => {
  it('is an alias to Math.min', () => {
    expect(minimum).toBe(Math.min)
  })
})
