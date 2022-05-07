import { Unit } from './core'
import { PI, TWO_PI } from './constants'

export const distance = (x1: Unit, y1: Unit, x2: Unit, y2: Unit): Unit => {
  return Math.hypot(x1 - x2, y1 - y2)
}

export const angle = (x1: Unit, y1: Unit, x2: Unit, y2: Unit): Unit => {
  const dy = y2 - y1
  const dx = x2 - x1
  const theta = Math.atan2(dy, dx) // range (-PI, PI]
  return (theta + PI) / TWO_PI
}
