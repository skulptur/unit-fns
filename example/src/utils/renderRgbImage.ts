import { Unit } from '../../../src'

export const renderRgbImage = (
  onSample: (x: Unit, y: Unit, colorAngle: Unit) => Unit,
  context: CanvasRenderingContext2D
) => {
  const { width, height } = context.canvas
  const imageData = context.createImageData(width, height)

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const i = (x + y * width) * 4
      const xUnit = x / width
      const yUnit = y / height

      imageData.data[i] = onSample(xUnit, yUnit, 0) * 255
      imageData.data[i + 1] = onSample(xUnit, yUnit, 0.5) * 255
      imageData.data[i + 2] = onSample(xUnit, yUnit, 1) * 255
      imageData.data[i + 3] = 255
    }
  }

  return imageData
}
