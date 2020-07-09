import { UnitFunction2d } from './UnitFunction2d';
import { Unit } from '../Unit';
import { mapUnit } from '../mapUnit';

export const peak: UnitFunction2d = (peak, t) => {
  return t < peak
    ? mapUnit(0 as Unit, peak, 0 as Unit, 1 as Unit, t)
    : mapUnit(peak as Unit, 1 as Unit, 1 as Unit, 0 as Unit, t);
};
