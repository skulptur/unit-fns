import { Unit } from '../Unit';

export const linearInterpolation = (a: Unit, b: Unit, t: Unit): Unit => {
  return (a * (1 - t) + b * t) as Unit;
};
