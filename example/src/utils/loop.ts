export const loop = (onFrame: () => void) => {
  let done = false

  function step() {
    onFrame()
    if (done) return
    window.requestAnimationFrame(step)
    // setTimeout(() => window.requestAnimationFrame(step), 5)
  }

  window.requestAnimationFrame(step)

  return () => {
    done = true
  }
}
