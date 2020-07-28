import React, { useEffect } from 'react'
import { times } from 'lodash-fp'
import { Unit } from '../../src'
// import { getRgbString1d } from '../getRgbString1d'
import { useCanvas } from './useCanvas'
import { drawPoint } from './drawPoint'

type Plot2dProps = {
  width: number
  height: number
  pointSize: number
  onSample: (x: Unit, y: Unit) => Unit
  sampleCount: number
}

export const Plot2d: React.FC<Plot2dProps> = ({
  width,
  height,
  onSample,
  pointSize,
  sampleCount,
}) => {
  const { canvasRef, contextRef } = useCanvas({ width, height })

  useEffect(() => {
    if (!canvasRef.current) return
    const context = contextRef.current!
    const halfSampleCount = sampleCount / 2
    const correctedSize = pointSize * devicePixelRatio
    times(x => {
      times(y => {
        const xUnit = (x / halfSampleCount) as Unit
        const yUnit = (y / halfSampleCount) as Unit

        drawPoint(
          onSample(xUnit, yUnit) * width,
          onSample(yUnit, xUnit) * height,
          correctedSize,
          context
        )
      }, halfSampleCount)
    }, halfSampleCount)
  }, [])

  return <canvas ref={canvasRef} />
}
