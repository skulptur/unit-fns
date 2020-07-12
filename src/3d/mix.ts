import { Unit } from '../Unit';
import { UnitFunction3d } from './UnitFunction3d';

export const mix: UnitFunction3d = (a, b, t) => {
  return (a * (1 - t) + b * t) as Unit;
};
