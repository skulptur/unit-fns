import { unitMax } from '../unitMax';
import { Unit } from '../Unit';
import { isUnit } from '../isUnit';

export const wrap = (value: number): Unit => {
  if (isUnit(value)) return value;

  if (value % 1 === 0) return 1 as Unit;

  return (value < 0 ? unitMax - (-value % unitMax) : value % unitMax) as Unit;
};
