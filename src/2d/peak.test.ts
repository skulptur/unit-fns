import { Unit } from '../unit/Unit';
import { peak } from './peak';

describe('peak', () => {
  it('creates a ramp that goes from 0 to 1 at peak position and then back down to 0', () => {
    expect(peak(0.5 as Unit, 0.25 as Unit)).toEqual(0.5);
    expect(peak(0.5 as Unit, 0.5 as Unit)).toEqual(1);
    expect(peak(0.5 as Unit, 0.75 as Unit)).toEqual(0.5);
    expect(peak(0.5 as Unit, 0 as Unit)).toEqual(0);
    expect(peak(0.5 as Unit, 1 as Unit)).toEqual(0);
  });
});
