import { UnitFunction2d } from './UnitFunction2d';
import { Unit } from '../core/Unit';

export const peak: UnitFunction2d = (peak, unit) => {
  return (unit < peak
    ? unit / peak
    : ((unit - peak) * -1) / (1 - peak) + 1) as Unit;
};
