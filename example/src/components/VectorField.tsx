import React, { useEffect } from 'react'
import { times } from 'lodash-fp'
import { Canvas } from './Canvas'
import { Unit } from '../../src'
import { useCanvas } from './useCanvas'
import { drawPoint } from './drawPoint'

type VectorFieldProps = {
  width: number
  height: number
  pointSize: number
  unitFns: [(t: Unit) => Unit, (t: Unit) => Unit]
  sampleCount: number
}

export const VectorField: React.FC<VectorFieldProps> = ({
  width,
  height,
  unitFns,
  pointSize,
  sampleCount,
}) => {
  const { canvasRef, contextRef } = useCanvas({ width, height })

  useEffect(() => {
    if (!canvasRef.current) return
    const context = contextRef.current!
    context.lineWidth = 1
    const halfPointSize = pointSize / 2
    const halfSampleCount = sampleCount / 2

    times(x => {
      times(y => {
        const xUnit = x / halfSampleCount
        const yUnit = y / halfSampleCount
        const canvasX = xUnit * width
        const canvasY = yUnit * height
        // const progress = (index / width) as Unit
        // const [x, y] = unitFns.map(unitFn => unitFn(progress))
        drawPoint(
          canvasX - halfPointSize,
          canvasY - halfPointSize,
          pointSize,
          context
        )
      }, halfSampleCount)
    }, halfSampleCount)
  }, [])

  return <Canvas ref={canvasRef} width={width} height={height} />
}
