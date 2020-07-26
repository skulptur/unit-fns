import { useRef, useEffect } from 'react'
import { scaleCanvas } from './scaleCanvas'

export const useCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null | undefined>()
  const contextRef = useRef<CanvasRenderingContext2D | null>()

  useEffect(() => {
    if (!canvasRef.current || contextRef.current) return
    contextRef.current = canvasRef.current.getContext('2d')
    scaleCanvas(
      canvasRef.current,
      contextRef.current!,
      canvasRef.current.width,
      canvasRef.current.height
    )
  }, [contextRef, canvasRef])

  return {
    canvasRef,
    contextRef,
  }
}
