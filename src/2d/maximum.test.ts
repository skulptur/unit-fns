import { maximum } from './maximum'

describe('maximum', () => {
  it('is an alias to Math.max', () => {
    expect(maximum).toBe(Math.max)
  })
})
