export const scaleCanvas = (
  width: number,
  height: number,
  pixelRatio: number = devicePixelRatio,
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D
) => {
  canvas.width = width * pixelRatio
  canvas.height = height * pixelRatio

  canvas.style.width = width + 'px'
  canvas.style.height = height + 'px'

  context.scale(pixelRatio, pixelRatio)
}
