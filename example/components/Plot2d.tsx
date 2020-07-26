import React, { useEffect } from 'react'
import { times } from 'lodash-fp'
import { Canvas } from './Canvas'
import { Unit } from '../../src'
// import { getRgbString1d } from '../getRgbString1d'
import { useCanvas } from './useCanvas'
import { drawPoint } from './drawPoint'

type Plot2dProps = {
  width: number
  height: number
  pointSize: number
  unitFns: [(t: Unit) => Unit, (t: Unit) => Unit]
  sampleCount: number
}

export const Plot2d: React.FC<Plot2dProps> = ({
  width,
  height,
  unitFns,
  pointSize,
  sampleCount,
}) => {
  const { canvasRef, contextRef } = useCanvas()

  useEffect(() => {
    if (!canvasRef.current) return
    const context = contextRef.current!
    context.lineWidth = 1
    const halfPointSize = pointSize / 2

    times(index => {
      const progress = (index / width) as Unit
      const [x, y] = unitFns.map(unitFn => unitFn(progress))
      drawPoint(
        x * width - halfPointSize,
        y * height - halfPointSize,
        pointSize,
        context
      )
    }, sampleCount)
  }, [])

  return <Canvas ref={canvasRef} width={width} height={height} />
}
