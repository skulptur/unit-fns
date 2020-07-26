export const scaleCanvas = (
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  width: number,
  height: number
) => {
  canvas.width = width * devicePixelRatio
  canvas.height = height * devicePixelRatio

  canvas.style.width = width + 'px'
  canvas.style.height = height + 'px'

  context.scale(devicePixelRatio, devicePixelRatio)
}
