import React, { useEffect } from 'react'
import { times } from 'lodash-fp'
import { Canvas } from './Canvas'
import { Unit } from '../../src'
import { getRgbString1d } from '../getRgbString1d'

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
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return
    const context = canvasRef.current.getContext('2d')!
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
