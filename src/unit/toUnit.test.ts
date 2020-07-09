import { toUnit } from './toUnit';

describe('toUnit', () => {
  it('converts a number to Unit, clamps numbers outside the range', () => {
    expect(toUnit(2)).toEqual(1);
    expect(toUnit(-1)).toEqual(0);
    expect(toUnit(0.5)).toEqual(0.5);
  });
});
