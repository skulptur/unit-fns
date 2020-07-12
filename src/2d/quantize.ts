import { Unit } from '../Unit';
import { UnitFunction2d } from './UnitFunction2d';
import { unitMax } from '../unitMax';

export const quantize: UnitFunction2d = (fraction, value) => {
  if (fraction === 0) return value;

  const bands = unitMax / fraction;
  return (Math.round(value * bands) / bands) as Unit;
};
