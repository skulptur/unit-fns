import { UnitFunction2d } from './UnitFunction2d';
import { mapRange } from '../operations/mapRange';
import { unitMin } from '../unitMin';
import { unitMax } from '../unitMax';

export const peak: UnitFunction2d = (peak, unit) => {
  return unit < peak
    ? mapRange(unitMin, peak, unitMin, unitMax, unit) // same as mapTo
    : mapRange(peak, unitMax, unitMax, unitMin, unit);
};
