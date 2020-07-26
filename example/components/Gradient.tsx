import React, { useEffect } from 'react'
import { times } from 'lodash-fp'
import { Canvas } from './Canvas'
import { Unit } from '../../src'
import { getRgbString1d } from '../getRgbString1d'
import { useCanvas } from './useCanvas'

type GradientProps = {
  width: number
  height: number
  unitFn: (t: Unit) => Unit
}

export const Gradient: React.FC<GradientProps> = ({
  width,
  height,
  unitFn,
}) => {
  const { canvasRef, contextRef } = useCanvas({ width, height })

  useEffect(() => {
    if (!canvasRef.current) return
    const context = contextRef.current!
    context.lineWidth = 1

    times(index => {
      const progress = (index / width) as Unit
      context.beginPath()
      context.moveTo(index, 0)
      context.lineTo(index, height)
      context.strokeStyle = getRgbString1d(unitFn(progress))
      context.stroke()
    }, width)
  }, [])

  return <canvas ref={canvasRef} />
}
