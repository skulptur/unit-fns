import { UnitFunction1d } from './UnitFunction1d';
import { threshold } from '../2d/threshold';
import { Unit } from '../Unit';

export const round: UnitFunction1d = unit => {
  return threshold(0.5 as Unit, unit);
};
