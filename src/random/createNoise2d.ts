import { makeNoise2D } from 'open-simplex-noise'
import { Unit } from 'core/Unit'

export const createNoise2d = makeNoise2D as (
  seed: number
) => (a: number, t: number) => Unit
