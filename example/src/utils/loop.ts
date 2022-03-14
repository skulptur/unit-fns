export const loop = (
  onFrame: (currentFrame: number, timestamp: number) => void
) => {
  let done = false
  let currentFrame = 0

  function step(timestamp: number) {
    onFrame(currentFrame, timestamp)
    if (done) return
    currentFrame++
    window.requestAnimationFrame(step)
  }

  window.requestAnimationFrame(step)

  return () => {
    done = true
  }
}
