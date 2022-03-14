export const loop = (
  onFrame: (
    currentFrame: number,
    delta: number,
    fps: number,
    elapsed: number
  ) => void,
  fps: number = 120
) => {
  const startTime = performance.now()
  const fpsInterval = 1000 / fps
  let done = false
  let currentFrame = 0
  let lastTime = startTime

  function step(now: number) {
    if (done) return

    const delta = now - lastTime
    const elapsedTime = now - startTime
    const currentFps = 1000 / (elapsedTime / currentFrame)

    if (delta > fpsInterval) {
      // adjust for fpsInterval not being multiple of 16.67
      lastTime = now - (elapsedTime % fpsInterval)

      onFrame(currentFrame, delta, currentFps, elapsedTime)

      currentFrame++
    }
    window.requestAnimationFrame(step)
  }

  window.requestAnimationFrame(step)

  return () => {
    done = true
  }
}
