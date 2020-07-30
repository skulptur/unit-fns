export const getImageData = (url: string) => {
  const image = new Image()
  image.src = url
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')!
  const imgWidth = image.width
  const imgHeight = image.height
  context.drawImage(image, 0, 0)
  const imageData = context.getImageData(0, 0, imgWidth, imgHeight)
  //   TODO: cleanup
  //   canvas.parentNode!.removeChild(canvas)
  return imageData
}
