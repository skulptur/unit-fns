import { makeNoise4D } from 'open-simplex-noise'
import { Unit } from 'core/Unit'

export const createNoise4d = makeNoise4D as (
  seed: number
) => (a: number, b: number, c: number, t: number) => Unit
