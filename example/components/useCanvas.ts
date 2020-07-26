import { useRef, useEffect } from 'react'
import { scaleCanvas } from './scaleCanvas'

type UseCanvasProps = {
  width: number
  height: number
  pixelRatio?: number
}

export const useCanvas = ({
  width,
  height,
  pixelRatio = devicePixelRatio,
}: UseCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const contextRef = useRef<CanvasRenderingContext2D | null>()

  useEffect(() => {
    if (!canvasRef.current || contextRef.current) return
    contextRef.current = canvasRef.current.getContext('2d')

    scaleCanvas(
      width,
      height,
      pixelRatio,
      canvasRef.current,
      contextRef.current!
    )
  }, [contextRef, canvasRef])

  return {
    canvasRef,
    contextRef,
  }
}
