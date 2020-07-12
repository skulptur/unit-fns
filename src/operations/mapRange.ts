import { Unit } from '../Unit';

export const mapRange = (
  inMin: Unit,
  inMax: Unit,
  outMin: Unit,
  outMax: Unit,
  unit: Unit
): Unit => {
  return (((unit - inMin) * (outMax - outMin)) / (inMax - inMin) +
    outMin) as Unit;
};
