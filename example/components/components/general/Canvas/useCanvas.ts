import { useRef, useEffect } from 'react'
// import { setContextScale } from '../../../lib/utils/canvas/setContextScale'

export const useCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null | undefined>()
  const contextRef = useRef<CanvasRenderingContext2D | null>()

  useEffect(() => {
    if (!canvasRef.current || contextRef.current) return
    contextRef.current = canvasRef.current.getContext('2d')
    // const context = contextRef.current!
  }, [contextRef, canvasRef])

  return {
    canvasRef,
    contextRef,
  }
}
