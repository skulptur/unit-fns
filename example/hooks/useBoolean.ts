import { useState, useCallback } from 'react'

export const useBoolean = (initialState: boolean) => {
  const [value, setValue] = useState<boolean>(initialState)

  const setTrue = useCallback(() => {
    setValue(true)
  }, [])

  const setFalse = useCallback(() => {
    setValue(false)
  }, [])

  const toggle = useCallback(() => {
    setValue(!value)
  }, [value])

  return [value, setTrue, setFalse, toggle] as const
}
