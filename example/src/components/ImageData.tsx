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
  onClick?: (
    event: React.MouseEvent<HTMLCanvasElement, MouseEvent>,
    sise: { x: number; y: number }
  ) => void
}

export const ImageData: React.FC<ImageDataProps> = ({
  width,
  height,
  pixelRatio,
  onSample,
  onClick = () => {},
}) => {
  const { canvasRef, contextRef } = useCanvas({ width, height, pixelRatio })

  useEffect(() => {
    if (!canvasRef.current) return
    const context = contextRef.current!
    putImageData(renderGreyscaleImage(onSample, context), context)
  }, [])

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

          onClick(event, { x, y })
        }}
      />
    </>
  )
}
