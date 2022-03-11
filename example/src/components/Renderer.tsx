import * as React from 'react'
import { quantize, repeat, Unit } from '../../../src'
import { ImageData } from './ImageData'

// makes a new number to be used as z
const grid = (
  gridX: number,
  gridY: number,
  fn3d: (x: Unit, y: Unit, z: Unit) => Unit
) => {
  const fractionX = 1 / gridX
  const fractionY = 1 / gridY
  // not sure this is correct
  const frac = 2 / (gridX + gridY)

  return (x: Unit, y: Unit): Unit => {
    const z = quantize(fractionY, y) + quantize(fractionX, x) * frac
    return fn3d(repeat(fractionX, x), repeat(fractionY, y), z)
  }
}

type RendererBaseProps = {
  width: number
  height: number
}

type Renderer2d = {
  kind: '2d'
  sketch: (x: Unit, y: Unit) => Unit
} & RendererBaseProps

type RendererGrid = {
  kind: 'grid'
  gridX: number
  gridY: number
  sketch: (x: Unit, y: Unit, z: Unit) => Unit
} & RendererBaseProps

export type RendererProps = Renderer2d | RendererGrid

export const Renderer = ({
  sketch,
  kind,
  width,
  height,
  ...props
}: RendererProps) => {
  return (
    <div>
      {kind === '2d' && (
        <ImageData width={width} height={height} onSample={sketch} />
      )}
      {kind === 'grid' && (
        <ImageData
          width={width}
          height={height}
          onSample={grid(
            (props as RendererGrid).gridX,
            (props as RendererGrid).gridY,
            sketch
          )}
        />
      )}
    </div>
  )
}
