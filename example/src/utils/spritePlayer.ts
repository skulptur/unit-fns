import { loop } from './loop'

type PlaySpriteProps = {
  wrapper: HTMLElement
  gridX: number
  gridY: number
  width: number
  height: number
}

export const spritePlayer = ({
  wrapper,
  gridX,
  gridY,
  width,
  height,
}: PlaySpriteProps) => {
  wrapper.style.width = `${width / gridX}px`
  wrapper.style.height = `${height / gridY}px`
  wrapper.style.overflow = 'hidden'

  const child = wrapper.firstElementChild as HTMLDivElement

  if (!child) {
    throw new Error("Wrapper didn't have a child element.")
  }

  let stopFn = () => {}

  const start = () => {
    stopFn = loop(currentFrame => {
      const multX = currentFrame % gridX
      const frameWidth = width / gridX
      const multY = Math.floor(currentFrame / gridY) % gridY
      const frameHeight = height / gridY

      child.style.transform = `translate(-${frameWidth *
        multX}px, -${frameHeight * multY}px)`
    })
  }

  const stop = () => {
    stopFn()
  }

  return {
    start,
    stop,
  }
}
