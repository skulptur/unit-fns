import { Unit } from '../../src'

export const renderGreyscaleImage = (
  unitFn2d: (x: Unit, y: Unit) => Unit,
  context: CanvasRenderingContext2D
) => {
  const { width, height } = context.canvas
  const imageData = context.createImageData(width, height)

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const i = (x + y * width) * 4
      const value = unitFn2d((x / width) as Unit, (y / height) as Unit) * 255
      imageData.data[i] = value
      imageData.data[i + 1] = value
      imageData.data[i + 2] = value
      imageData.data[i + 3] = 255
    }
  }

  return imageData
}

export const putImageData = (
  imageData: ImageData,
  context: CanvasRenderingContext2D
) => {
  context.putImageData(imageData, 0, 0)
}
