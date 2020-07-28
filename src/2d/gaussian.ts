const _2PI = Math.PI * 2

export const gaussian = () => {
  const random1 = Math.random()
  const random2 = Math.random()

  return Math.sqrt(-2.0 * Math.log(random1)) * Math.cos(_2PI * random2)
}
