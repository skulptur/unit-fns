export const unblock = <T>(fn: () => T) => {
  return new Promise<T>(resolve => {
    return setTimeout(() => {
      resolve(fn())
    }, 0)
  })
}
