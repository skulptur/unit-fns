import * as React from 'react'
import { createTiles, Unit } from '../../../src'
import { spritePlayer } from '../utils/spritePlayer'
import { useCanvas } from './useCanvas'
import { putImageData } from '../utils/putImageData'
import { renderGreyscaleImage } from '../utils/renderGreyscaleImage'
import { saveAs } from 'file-saver'

type RendererSharedProps = {
  onClick?: (
    event: React.MouseEvent<HTMLCanvasElement, MouseEvent>,
    size: { x: number; y: number }
  ) => void
}

type RendererProps = {
  onSample: (x: Unit, y: Unit) => Unit
  wrapperRef: React.RefObject<HTMLDivElement>
  canvasRef: React.MutableRefObject<HTMLCanvasElement | null>
} & RendererSharedProps

type UseAnimatedRenderer = {
  width: number
  height: number
  pixelRatio?: number
  tileX: number
  tileY: number
  isPlaying?: boolean
  onSample: (x: Unit, y: Unit, z: Unit) => Unit
} & RendererSharedProps

export const useAnimatedRenderer = ({
  isPlaying = true,
  onSample,
  onClick,
  tileX,
  tileY,
  width,
  height,
  pixelRatio,
}: UseAnimatedRenderer) => {
  const [_isPlaying, setIsPlaying] = React.useState(isPlaying)
  const { canvasRef, contextRef } = useCanvas({ width, height, pixelRatio })

  // needed for the player
  const wrapperRef = React.useRef<HTMLDivElement>(null)

  const onSave = React.useCallback((filename: string = 'image.png') => {
    canvasRef.current &&
      canvasRef.current.toBlob(blob => {
        saveAs(blob, filename)
      })
  }, [])

  // converts 3d into 2d
  const _onSample = React.useCallback(createTiles(tileX, tileY, onSample), [
    onSample,
    tileX,
    tileY,
  ])

  // handles play/stop transparently
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
    if (!canvasRef.current) return
    const context = contextRef.current!
    putImageData(renderGreyscaleImage(_onSample, context), context)
  }, [])

  // starts / stops player
  // TODO: implement pause
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

  // allows updating state via props
  React.useEffect(() => {
    setIsPlaying(isPlaying)
  }, [isPlaying])

  return {
    wrapperRef,
    canvasRef,
    isPlaying: _isPlaying,
    setIsPlaying,
    onSample: _onSample,
    onClick: _onClick,
    width: width,
    height: height,
    onSave,
  }
}

export const Renderer = ({
  onClick = () => {},
  wrapperRef,
  canvasRef,
}: RendererProps) => {
  return (
    <div ref={wrapperRef}>
      <canvas
        ref={canvasRef}
        onClick={event => {
          const rect = event.currentTarget.getBoundingClientRect()
          const x =
            (event.clientX - rect.left) / event.currentTarget.clientWidth
          const y =
            (event.clientY - rect.top) / event.currentTarget.clientHeight

          onClick(event, { x, y })
        }}
      />
    </div>
  )
}
