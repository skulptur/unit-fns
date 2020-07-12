import { UnitFunction3d } from './UnitFunction3d';

export const toggle: UnitFunction3d = (a, b, t) => {
  return t < 0.5 ? a : b;
};
