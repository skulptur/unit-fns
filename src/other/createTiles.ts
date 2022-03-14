import { Unit } from '../core/Unit'
import { repeat } from '../2d/repeat'
import { quantize } from '../2d/quantize'

export const createTiles = (
  gridX: number,
  gridY: number,
  fn3d: (x: Unit, y: Unit, z: Unit) => Unit
) => {
  const fractionX = 1 / gridX
  const fractionY = 1 / gridY

  const frac = 2 / (gridX + gridY)

  return (x: Unit, y: Unit): Unit => {
    const z = quantize(fractionY, y) + quantize(fractionX, x) * frac
    return fn3d(repeat(fractionX, x), repeat(fractionY, y), z)
  }
}
