import { mapTo } from '../number/mapTo'
import { Unit } from 'core/Unit'

// typed alias
export const mix = mapTo as (a: Unit, b: Unit, t: Unit) => Unit
