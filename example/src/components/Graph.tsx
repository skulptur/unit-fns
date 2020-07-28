import React, { useEffect } from 'react'
import { times } from 'lodash-fp'
import { Canvas } from './Canvas'
import { Unit } from '../../src'
import { getRgbString1d } from '../getRgbString1d'
import { useCanvas } from './useCanvas'

type GraphProps = {
  width: number
  height: number
  thickness: number
  unitFn: (t: Unit) => Unit
}

export const Graph: React.FC<GraphProps> = ({
  width,
  height,
  unitFn,
  thickness,
}) => {
  const { canvasRef, contextRef } = useCanvas({ width, height })

  useEffect(() => {
    if (!canvasRef.current) return
    const context = contextRef.current!
    context.lineWidth = 1
    const halfThickness = thickness / 2
    times(index => {
      const progress = (index / width) as Unit
      const unit = unitFn(progress)
      const lineY = height - unit * height
      context.beginPath()
      context.moveTo(index, lineY - halfThickness)
      context.lineTo(index, lineY + halfThickness)
      context.strokeStyle = getRgbString1d(unit)
      context.stroke()
    }, width)
  }, [])

  return <Canvas ref={canvasRef} width={width} height={height} />
}
