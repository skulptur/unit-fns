import { Unit } from '../Unit';
import { unitMin } from '../unitMin';
import { unitMax } from '../unitMax';
import { mapRange } from '../operations/mapRange';

export const mapTo = (outMin: Unit, outMax: Unit, unit: Unit): Unit => {
  return mapRange(unitMin, unitMax, outMin, outMax, unit);
};
