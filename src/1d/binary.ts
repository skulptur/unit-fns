import { UnitFunction1d } from './UnitFunction1d';
import { Unit } from '../unit/Unit';
import { threshold } from '../2d/threshold';

export const binary: UnitFunction1d = t => {
  return threshold(0.5 as Unit, t);
};
