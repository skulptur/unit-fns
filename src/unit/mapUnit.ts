import { Unit } from './Unit';

export const mapUnit = (
  inMin: Unit,
  inMax: Unit,
  outMin: Unit,
  outMax: Unit,
  value: Unit
): Unit => {
  return (((value - inMin) * (outMax - outMin)) / (inMax - inMin) +
    outMin) as Unit;
};
