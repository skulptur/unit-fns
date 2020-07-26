export const clearCanvas = (width: number, height: number, context: CanvasRenderingContext2D) => {
  context.clearRect(0, 0, width, height)
}
