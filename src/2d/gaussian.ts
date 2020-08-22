import { TWO_PI } from '../constants'

export const gaussian = () => {
  const random1 = Math.random()
  const random2 = Math.random()

  return Math.sqrt(-2.0 * Math.log(random1)) * Math.cos(TWO_PI * random2)
}
