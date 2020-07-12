import { random } from './random'

describe('random', () => {
  it('is an alias to Math.random', () => {
    expect(random).toBe(Math.random)
  })
})
