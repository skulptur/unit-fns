import { Unit } from '../Unit';
import { unitMin } from '../unitMin';
import { unitMax } from '../unitMax';

export const clip = (value: number): Unit => {
  return Math.max(unitMin, Math.min(unitMax, value)) as Unit;
};
