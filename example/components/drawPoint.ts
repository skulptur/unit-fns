export const drawPoint = (
  x: number,
  y: number,
  size: number,
  context: CanvasRenderingContext2D
) => {
  context.fillRect(x, y, size, size)
  // TODO: move to a fill util
  context.fillStyle = 'black'
  context.fill()
}
