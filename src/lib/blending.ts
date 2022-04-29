export const multiply = (a: number, b: number) => {
  return a * b
}
export const screen = (a: number, b: number) => {
  return 1 - (1 - a) * (1 - b)
}
export const darken = (a: number, b: number) => {
  return Math.min(a, b)
}
export const lighten = (a: number, b: number) => {
  return Math.max(a, b)
}
export const difference = (a: number, b: number) => {
  return Math.abs(a - b)
}
export const exclusion = (a: number, b: number) => {
  return a + b - 2 * a * b
}
export const overlay = (a: number, b: number) => {
  return a < 0.5 ? 2.0 * a * b : 1.0 - 2.0 * (1.0 - a) * (1.0 - b)
}
export const hardLight = (a: number, b: number) => {
  return b < 0.5 ? 2.0 * a * b : 1.0 - 2.0 * (1.0 - a) * (1.0 - b)
}
export const softLight = (a: number, b: number) => {
  return b < 0.5
    ? 2.0 * a * b + a * a * (1.0 - 2.0 * b)
    : Math.sqrt(a) * (2.0 * b - 1.0) + 2.0 * a * (1.0 - b)
}
export const colorDodge = (a: number, b: number) => {
  return a / (1.0 - b)
}
export const linearDodge = (a: number, b: number) => {
  return a + b
}
export const burn = (a: number, b: number) => {
  return 1.0 - (1 - a) / b
}
export const linearBurn = (a: number, b: number) => {
  return a + b - 1.0
}
