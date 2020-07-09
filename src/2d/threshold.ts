import { UnitFunction2d } from './UnitFunction2d';
import { Unit } from '../Unit';

export const threshold: UnitFunction2d = (threshold, t) => {
  return t >= threshold ? (1 as Unit) : (0 as Unit);
};
