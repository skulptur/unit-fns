import { loop } from './loop'

type PlaySpriteProps = {
  wrapper: HTMLElement
  tileX: number
  tileY: number
  width: number
  height: number
}

export const spritePlayer = ({
  wrapper,
  tileX,
  tileY,
  width,
  height,
}: PlaySpriteProps) => {
  wrapper.style.width = `${width}px`
  wrapper.style.height = `${height}px`
  wrapper.style.overflow = 'hidden'

  const child = wrapper.firstElementChild as HTMLDivElement

  if (!child) {
    throw new Error("Wrapper didn't have a child element.")
  }

  let stopFn = () => {}

  const start = () => {
    stopFn = loop(currentFrame => {
      const frameWidth = width
      const frameHeight = height
      const multX = currentFrame % tileX
      const multY = Math.floor(currentFrame / tileY) % tileY

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
