import { Unit } from '../../../src'
import { spritePlayer } from '../utils/spritePlayer'
import { putImageData } from '../utils/putImageData'
import { unblock } from '../utils/unblock'
import { renderGreyscaleImage } from '../utils/renderGreyscaleImage'
import { scaleCanvas } from '../utils/scaleCanvas'

export type Renderer = ReturnType<typeof createRenderer>

// TODO: allow using multiple types of renderer:
// black and white (single fn applies to all channels)
// channel mapped (single fn for generating nums and 3 fns to map channels)
// rgb (3 separate fns to generate each channel)

type RendererProps = {
  width: number
  height: number
  pixelRatio?: number
  tileX: number
  tileY: number
  isPlaying?: boolean
  onSample: (x: Unit, y: Unit, z: Unit) => Unit
  wrapper: HTMLElement
  onDone?: () => void
  onProgress?: (complete: Unit) => void
  onClick?: (event: MouseEvent, size: { x: number; y: number }) => void
}

export const createRenderer = (props: RendererProps) => {
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
  let complete = 0
  const renderPromises = canvases.map(({ context }, i) => {
    const length = canvases.length

    return unblock(() => {
      putImageData(
        renderGreyscaleImage(
          (x, y) => props.onSample(x, y, i / length),
          context
        ),
        context
      )
      complete++

      props.onProgress && props.onProgress(complete / length)
    })
  })

  const player = spritePlayer(props)

  // event callback
  props.onDone && Promise.all(renderPromises).then(props.onDone)

  const onClick = (event: MouseEvent) => {
    const currentTarget = event.currentTarget! as HTMLElement
    const rect = currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / currentTarget.clientWidth
    const y = (event.clientY - rect.top) / currentTarget.clientHeight

    player.isPlaying() ? player.stop() : player.start()
    props.onClick && props.onClick(event, { x, y })
  }
  props.wrapper.addEventListener('click', onClick)

  const dispose = () => {
    props.wrapper.removeEventListener('click', onClick)
  }

  return {
    canvases,
    player,
    dispose,
  }
}
