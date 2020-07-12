import { UnitFunction1d } from './UnitFunction1d';
import { Unit } from '../Unit';

export const inverse: UnitFunction1d = unit => {
  return (1 - unit) as Unit;
};
