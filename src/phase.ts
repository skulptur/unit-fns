import { wrap } from './wrap';
import { Unit } from './Unit';

export const phase = (offset: number, value: Unit): Unit => {
  return wrap(value + offset);
};
