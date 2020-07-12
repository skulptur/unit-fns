import { Unit } from '../Unit';
import { unitMin } from '../unitMin';
import { unitMax } from '../unitMax';
import { mapRange } from '../operations/mapRange';

export const mapFrom = (inMin: Unit, inMax: Unit, unit: Unit): Unit => {
  return mapRange(inMin, inMax, unitMin, unitMax, unit);
};
