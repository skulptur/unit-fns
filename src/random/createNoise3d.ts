import { makeNoise3D } from 'open-simplex-noise'
import { Unit } from 'core/Unit'

export const createNoise3d = makeNoise3D as (
  seed: number
) => (a: number, b: number, t: number) => Unit
