import * as React from 'react'
import { createTiles, Unit } from '../../../src'
import { ImageData } from './ImageData'
import { spritePlayer } from '../utils/spritePlayer'

type RendererBaseProps = {
  width: number
  height: number
  onClick?: (
    event: React.MouseEvent<HTMLCanvasElement, MouseEvent>,
    sise: { x: number; y: number }
  ) => void
}

type Renderer2d = {
  kind: '2d'
  sketch: (x: Unit, y: Unit) => Unit
} & RendererBaseProps

type RendererTile = {
  kind: 'tile'
  tileX: number
  tileY: number
  play: boolean
  sketch: (x: Unit, y: Unit, z: Unit) => Unit
} & RendererBaseProps

export type RendererProps = Renderer2d | RendererTile

export const Renderer = ({
  sketch,
  kind,
  width,
  height,
  onClick,
  ...props
}: RendererProps) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if ('play' in props && props.play) {
      const wrapper = wrapperRef.current!
      const player = spritePlayer({ ...props, width, height, wrapper })
      player.start()

      return player.stop
    }
  }, ['play' in props && props.play])

  return (
    <div ref={wrapperRef}>
      {kind === '2d' && (
        <ImageData
          width={width}
          height={height}
          onClick={onClick}
          onSample={sketch as Renderer2d['sketch']}
        />
      )}
      {kind === 'tile' && (
        <ImageData
          width={width}
          height={height}
          onClick={onClick}
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
