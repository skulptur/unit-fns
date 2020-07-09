import { Unit } from './Unit';

export const quantize = (slots: number, value: Unit): Unit => {
  return (Math.round(value * slots) / slots) as Unit;
};
