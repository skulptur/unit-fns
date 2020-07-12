import { clip } from './clip'

describe('clip', () => {
  it('converts a number to Unit, clips numbers outside the range', () => {
    expect(clip(2)).toBe(1)
    expect(clip(-1)).toBe(0)
    expect(clip(0.5)).toBe(0.5)
  })
})
