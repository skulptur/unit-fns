export const mapRange = <T extends number = number>(
  inMin: number,
  inMax: number,
  outMin: T,
  outMax: T,
  value: number
): T => {
  return (((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin) as T
}
