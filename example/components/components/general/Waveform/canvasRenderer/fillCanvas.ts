import { Dimensions2 } from '../../../../lib/types/lib'

export const fillCanvas = (
  color: string,
  size: Dimensions2<number>,
  context: CanvasRenderingContext2D
) => {
  context.beginPath()
  context.rect(0, 0, size[0], size[1])
  context.fillStyle = color
  context.fill()
}
