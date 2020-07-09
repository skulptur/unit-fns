import { unitMax } from './unitMax';
import { unitMin } from './unitMin';
import { Unit } from './Unit';

export const wrap = (value: number): Unit => {
  return (value < unitMin
    ? unitMax - ((unitMin - value) % (unitMax - unitMin))
    : unitMin + ((value - unitMin) % (unitMax - unitMin))) as Unit;
};
