import * as React from 'react'
import { createTiles, Unit } from '../../../src'
import { ImageData } from './ImageData'
import { spritePlayer } from '../utils/spritePlayer'

type RendererProps = {
  width: number
  height: number
  onClick?: (
    event: React.MouseEvent<HTMLCanvasElement, MouseEvent>,
    size: { x: number; y: number }
  ) => void
  onSample: (x: Unit, y: Unit) => Unit
  wrapperRef: React.RefObject<HTMLDivElement>
}

type UseAnimatedRenderer = {
  tileX: number
  tileY: number
  isPlaying?: boolean
  onSample: (x: Unit, y: Unit, z: Unit) => Unit
} & Omit<RendererProps, 'onSample' | 'wrapperRef'>

export const useAnimatedRenderer = ({
  isPlaying = true,
  onSample,
  onClick,
  tileX,
  tileY,
  width,
  height,
}: UseAnimatedRenderer) => {
  const [_isPlaying, setIsPlaying] = React.useState(isPlaying)
  const wrapperRef = React.useRef<HTMLDivElement>(null)

  const _onSample = React.useCallback(createTiles(tileX, tileY, onSample), [
    onSample,
    tileX,
    tileY,
  ])

  const _onClick = React.useCallback(
    (
      event: React.MouseEvent<HTMLCanvasElement, MouseEvent>,
      size: { x: number; y: number }
    ) => {
      setIsPlaying(!_isPlaying)
      onClick && onClick(event, size)
    },
    [_isPlaying, setIsPlaying, onClick]
  )

  React.useEffect(() => {
    if (_isPlaying) {
      const wrapper = wrapperRef.current!
      const player = spritePlayer({
        tileX,
        tileY,
        width,
        height,
        wrapper,
      })
      player.start()

      return player.stop
    }
  }, [_isPlaying])

  return {
    isPlaying: _isPlaying,
    setIsPlaying,
    wrapperRef,
    onSample: _onSample,
    onClick: _onClick,
    width: width,
    height: height,
  }
}

export const Renderer = ({
  onSample,
  width,
  height,
  onClick,
  wrapperRef,
}: RendererProps) => {
  return (
    <div ref={wrapperRef}>
      <ImageData
        width={width}
        height={height}
        onClick={onClick}
        onSample={onSample}
      />
    </div>
  )
}
