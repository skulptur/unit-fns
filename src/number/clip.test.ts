import { clip } from './clip';

describe('clip', () => {
  it('converts a number to Unit, clips numbers outside the range', () => {
    expect(clip(2)).toEqual(1);
    expect(clip(-1)).toEqual(0);
    expect(clip(0.5)).toEqual(0.5);
  });
});
