import { round } from './round';
import { Unit } from '../Unit';
import { unitMin } from '../unitMin';
import { unitMax } from '../unitMax';

describe('round', () => {
  it('rounds to nearest Unit boundary', () => {
    expect(round(-1 as Unit)).toBe(unitMin);
    expect(round(0 as Unit)).toBe(unitMin);
    expect(round(0.49 as Unit)).toBe(unitMin);
    expect(round(0.5 as Unit)).toBe(unitMax);
    expect(round(0.51 as Unit)).toBe(unitMax);
    expect(round(2 as Unit)).toBe(unitMax);
  });
});
