import React, { useEffect } from 'react'
import { times } from 'lodash-fp'
import { Unit } from '../../../src'
import { useCanvas } from './useCanvas'
import { drawPoint } from './drawPoint'

type PointGridProps = {
  width: number
  height: number
  pointSize: number
  unitFns: [(t: Unit) => Unit, (t: Unit) => Unit]
  sampleCount: number
}

export const PointGrid: React.FC<PointGridProps> = ({
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
        const canvasX = unitFns[0](xUnit) * width
        const canvasY = unitFns[1](yUnit) * height
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

  return <canvas ref={canvasRef} />
}
