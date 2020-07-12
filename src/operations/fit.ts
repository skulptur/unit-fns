import { UnitFunction1d } from '../1d/UnitFunction1d';
import { Unit } from '../Unit';
import { quantize } from '../2d/quantize';
import { unitMax } from '../unitMax';
import { repeat } from '../2d/repeat';

export const fit = (fns: ReadonlyArray<UnitFunction1d>, unit: Unit): Unit => {
  const fnsLength = fns.length;
  const increments = (unitMax / fnsLength) as Unit;
  const id = quantize(increments, unit) * fnsLength;
  const t = repeat(increments, unit);
  const fn = fns[id];

  return fn(t);
};
