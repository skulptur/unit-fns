import * as React from 'react'
import { createTiles, Unit } from '../../../src'
import { ImageData } from './ImageData'

type RendererBaseProps = {
  width: number
  height: number
}

type Renderer2d = {
  kind: '2d'
  sketch: (x: Unit, y: Unit) => Unit
} & RendererBaseProps

type RendererTile = {
  kind: 'tile'
  tileX: number
  tileY: number
  sketch: (x: Unit, y: Unit, z: Unit) => Unit
} & RendererBaseProps

export type RendererProps = Renderer2d | RendererTile

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
        <ImageData width={width} height={height} onSample={sketch as Renderer2d['sketch']} />
      )}
      {kind === 'tile' && (
        <ImageData
          width={width}
          height={height}
          onSample={createTiles(
            (props as RendererTile).tileX,
            (props as RendererTile).tileY,
            sketch
          )}
        />
      )}
    </div>
  )
}
