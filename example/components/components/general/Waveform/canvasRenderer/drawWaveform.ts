import { minimum } from '../../../../lib/number/math/minimum'
import clamp from 'lodash/clamp'
import { Dimensions2 } from '../../../../lib/types/lib'
import { drawLine } from './drawLine'
import { clearCanvas } from './clearCanvas'
import { Size } from '../../../../types/Size'
import { Zoom } from '../../../../types/Zoom'
import { setContextScale } from '../../../../lib/utils/canvas/setContextScale'

export interface DrawWaveformOptions extends Size, Zoom {
  context: CanvasRenderingContext2D
  audioChannel: Float32Array
  strokeColor: string // TODO: use type of css/svg colors
}

export const scaling = {
  x: 0.02,
  y: 300,
}

// TODO: add canvas scaling coeficcient for high res screens
// TODO: divide the work in several frames and render as many points dynamically as possible for maximum speed without affecting the fps
export const drawWaveform = ({
  width,
  height,
  context,
  audioChannel,
  xZoom,
  yZoom,
  // backgroundColor,
  strokeColor = 'gold',
}: DrawWaveformOptions) => {
  setContextScale(devicePixelRatio, devicePixelRatio, context)

  // clearCanvas(width, height, context)

  // TODO: instead of filling the whole canvas, we should probably allow the horizontal range to be configurable so we can render only what we are interested in
  const samplesPerPixel = 1 / (scaling.x * xZoom)
  const totalPixels = width
  const totalSamples = audioChannel.length
  const samplesToRender = Math.ceil(minimum(samplesPerPixel * totalPixels, totalSamples))

  // TODO: use our own clamp function
  // TODO: allow for custom upper / lower bounds
  // TODO: consider using a different scale than linear for the details level;
  const samplesToSkip = clamp(Math.ceil(samplesPerPixel), 5, 100)
  const yScaling = scaling.y * 0.6 // scaling.y is the container sise, but we want some padding

  context.strokeStyle = strokeColor
  let prevX = 0
  let prevY = height / 2
  for (let i = 0; i <= samplesToRender; i += samplesToSkip) {
    const currentSample = audioChannel[i]
    const x = i * scaling.x * xZoom
    const y = height / 2 + currentSample * yScaling * yZoom

    context.beginPath()
    drawLine(prevX, prevY, x, y, context)
    context.stroke()

    prevX = x
    prevY = y
  }
}
