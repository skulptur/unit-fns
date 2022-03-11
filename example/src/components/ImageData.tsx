import React, { useEffect, useState } from 'react'
import { Unit } from '../../../src'
import { useCanvas } from './useCanvas'
import { putImageData } from '../utils/putImageData'
import { renderGreyscaleImage } from '../utils/renderGreyscaleImage'
import { saveAs } from 'file-saver'

type ImageDataProps = {
  width: number
  height: number
  onSample: (x: Unit, y: Unit) => Unit
  pixelRatio?: number
}

export const ImageData: React.FC<ImageDataProps> = ({
  width,
  height,
  pixelRatio,
  onSample,
}) => {
  const { canvasRef, contextRef } = useCanvas({ width, height, pixelRatio })
  const [{ x: mouseX, y: mouseY }, setMousePosition] = useState({ x: 1, y: 1 })

  useEffect(() => {
    if (!canvasRef.current) return
    const context = contextRef.current!
    putImageData(renderGreyscaleImage(onSample, context), context)
  }, [mouseX, mouseY])

  return (
    <>
      {/* <button
        onClick={() => {
          canvasRef.current?.toBlob(blob => {
            blob && saveAs(blob, 'image')
          })
        }}
      >
        download
      </button> */}
      <canvas
        ref={canvasRef}
        onClick={event => {
          const rect = event.currentTarget.getBoundingClientRect()
          const x =
            (event.clientX - rect.left) / event.currentTarget.clientWidth
          const y =
            (event.clientY - rect.top) / event.currentTarget.clientHeight

          setMousePosition({ x, y })
        }}
      />
    </>
  )
}
