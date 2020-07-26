export const drawLine = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  context: CanvasRenderingContext2D
) => {
  context.moveTo(x1, y1)
  context.lineTo(x2, y2)
}
