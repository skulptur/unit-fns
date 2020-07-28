import { Unit } from '..'
import { random } from '../random/random'
import { offset } from './offset'

export const diffuse = (amount: Unit, t: Unit): Unit => {
  return offset((random() * amount) as Unit, t)
}
