import { peak } from './peak';
import { unitMin } from '../unitMin';
import { unitMax } from '../unitMax';
import { Unit } from '../Unit';

describe('peak', () => {
  it('creates a ramp that goes from 0 to 1 at peak position and then back down to 0', () => {
    expect(peak(0.5 as Unit, 0.25 as Unit)).toBe(0.5);
    expect(peak(0.5 as Unit, 0.5 as Unit)).toBe(1);
    expect(peak(0.5 as Unit, 0.75 as Unit)).toBe(0.5);
    expect(peak(0.5 as Unit, unitMin)).toBe(0);
    expect(peak(0.5 as Unit, unitMax)).toBe(0);
  });
});
