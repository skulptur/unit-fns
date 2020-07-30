import { Unit } from '../../../src'

export const getRgbString1d = (unit: Unit) => {
  const value = unit * 255
  return `rgb(${value}, ${value}, ${value})`
}
