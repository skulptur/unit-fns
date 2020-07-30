export const putImageData = (
  imageData: ImageData,
  context: CanvasRenderingContext2D
) => {
  context.putImageData(imageData, 0, 0)
}
