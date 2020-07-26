export const fitToContainer = (scalingCoefficient: number, canvas: HTMLCanvasElement) => {
  // Make it visually fill the positioned parent
  canvas.style.width = '100%'
  canvas.style.height = '100%'
  // ...then set the internal size to match
  canvas.width = canvas.offsetWidth * scalingCoefficient
  canvas.height = canvas.offsetHeight * scalingCoefficient
}
