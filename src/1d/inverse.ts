import { UnitFunction1d } from './UnitFunction1d';
import { Unit } from '../unit/Unit';

export const inverse: UnitFunction1d = t => {
  return (1 - t) as Unit;
};
