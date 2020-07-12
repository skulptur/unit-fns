import { UnitFunction1d } from './UnitFunction1d';
import { unitMax } from '../unitMax';
import { unitMin } from '../unitMin';
import { toggle } from '../3d/toggle';

export const binary: UnitFunction1d = unit => {
  return toggle(unitMin, unitMax, unit);
};
