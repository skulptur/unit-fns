import React, { useEffect } from 'react'
import { drawWaveform, scaling } from './canvasRenderer/drawWaveform'

import { Canvas } from '../Canvas/Canvas'
import { Relative } from '../Position'
import { AudioChannel } from '../../../types/Audio'
import { Zoom } from '../../../types/Zoom'
import { useCanvas } from '../Canvas/useCanvas'

interface WaveformCanvasProps extends Zoom {
  audioChannel: AudioChannel
  before?: React.ReactNode
  after?: React.ReactNode
  height: number
  strokeColor: string
}

export const WaveformCanvas: React.FC<WaveformCanvasProps> = ({
  height,
  xZoom,
  yZoom,
  audioChannel,
  strokeColor,
  ...props
}) => {
  const { canvasRef, contextRef } = useCanvas()

  //  TODO: use debounced value
  const width = Math.ceil(audioChannel.length * scaling.x * xZoom)
  const actualHeight = Math.ceil(height * yZoom)

  useEffect(() => {
    drawWaveform({
      width,
      height: actualHeight,
      context: contextRef.current!,
      audioChannel,
      xZoom,
      yZoom,
      strokeColor,
    })
  }, [actualHeight, audioChannel, contextRef, strokeColor, width, xZoom, yZoom])

  return (
    <Relative width={width}>
      {props.before}
      <Canvas width={width} height={actualHeight} ref={canvasRef as any} />
      {props.after}
    </Relative>
  )
}
