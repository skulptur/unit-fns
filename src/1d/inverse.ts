import { UnitFunction1d } from './UnitFunction1d';
import { Unit } from '../Unit';

export const inverse: UnitFunction1d = t => {
  return (1 - t) as Unit;
};
