import { UnitFunction2d } from './UnitFunction2d';
import { unitMax } from '../unitMax';
import { unitMin } from '../unitMin';

export const threshold: UnitFunction2d = (threshold, t) => {
  return t < threshold ? unitMin : unitMax;
};
