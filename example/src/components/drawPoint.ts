export const drawPoint = (
  x: number,
  y: number,
  size: number,
  context: CanvasRenderingContext2D
) => {
  const halfSize = size / 2
  context.fillRect(x - halfSize, y - halfSize, size, size)
  // TODO: move to a fill util
  context.fillStyle = 'black'
  context.fill()
}
