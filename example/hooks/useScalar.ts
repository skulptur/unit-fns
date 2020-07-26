import { Scalar } from '../lib/number/scalar/scalar'
import { useState, useCallback } from 'react'
import { clampScalar } from '../lib/number/scalar/clampScalar'

export const useScalar = (initialState: Scalar, step: Scalar) => {
  const [value, setValue] = useState<Scalar>(initialState)

  const increase = useCallback(() => {
    setValue(clampScalar(value + step))
  }, [step, value])

  const decrease = useCallback(() => {
    setValue(clampScalar(value - step))
  }, [step, value])

  return [value, setValue, increase, decrease] as const
}
