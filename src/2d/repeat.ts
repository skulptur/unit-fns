import { wrap } from '../number/wrap';
import { UnitFunction2d } from './UnitFunction2d';

export const repeat: UnitFunction2d = (scale, t) => {
  const times = 1 / scale;
  return wrap(t * times);
};
