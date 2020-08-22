import { Unit } from '..'
import { random } from '../random/random'
import { offset } from './offset'

export const diffuse = (amount: Unit, t: Unit): Unit => {
  // TODO: - amount / 2
  return offset(random() * amount, t)
}
