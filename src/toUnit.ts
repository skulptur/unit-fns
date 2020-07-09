import { Unit } from 'Unit';

export const toUnit = (value: number): Unit => {
  return Math.max(0, Math.min(1, value)) as Unit;
};
