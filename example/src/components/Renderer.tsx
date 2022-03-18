import * as React from 'react'
import { createTiles, Unit } from '../../../src'
import { spritePlayer } from '../utils/spritePlayer'
import { useCanvas } from './useCanvas'
import { putImageData } from '../utils/putImageData'
import { renderGreyscaleImage } from '../utils/renderGreyscaleImage'
import { saveAs } from 'file-saver'
import { scaleCanvas } from '../utils/scaleCanvas'

type VanillaRendererProps = {
  wrapper: HTMLElement
}

export const renderer = (props: UseAnimatedRenderer & VanillaRendererProps) => {
  const createCanvas = (container: HTMLElement) => {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')!
    scaleCanvas(props.width, props.height, props.pixelRatio, canvas, context)
    canvas.style.margin = `${0}px`
    canvas.style.padding = `${0}px`

    container.appendChild(canvas)

    return { canvas, context }
  }

  const createCanvases = (length: number) => {
    // so they tile and we can use the sprite player
    const container = document.createElement('div')
    container.style.width = `${props.width * props.tileX}px`
    container.style.height = `${props.height * props.tileY}px`
    container.style.display = 'flex'
    container.style.flexWrap = 'wrap'

    props.wrapper.appendChild(container)

    return Array.from({ length }, () => {
      return createCanvas(container)
    })
  }

  const canvases = createCanvases(props.tileX * props.tileY)

  // render
  canvases.forEach(({ context }, i) => {
    const length = canvases.length
    putImageData(
      renderGreyscaleImage((x, y) => props.onSample(x, y, i / length), context),
      context
    )
  })

  const player = spritePlayer(props)

  return {
    canvases,
    player,
  }
}

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

// TODO: support any number of canvas elements... probably should use vanilla js for everything (create the canvases etc)
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
