import { wrap } from './wrap';
import { Unit } from './Unit';

export const repeat = (times: number, t: Unit): Unit => {
  return wrap(t * times);
};
