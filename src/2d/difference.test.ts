import { difference } from './difference';
import { unitMin } from '../unitMin';
import { unitMax } from '../unitMax';
import { Unit } from '../Unit';

describe('difference', () => {
  it('the absolute difference between two units', () => {
    expect(difference(0.5 as Unit, 0.25 as Unit)).toEqual(0.25);
    expect(difference(0.5 as Unit, 0.5 as Unit)).toEqual(0);
    expect(difference(0.5 as Unit, 0.75 as Unit)).toEqual(0.25);
    expect(difference(0.5 as Unit, unitMin)).toEqual(0.5);
    expect(difference(0.5 as Unit, unitMax)).toEqual(0.5);
  });
});
