import { useState, Dispatch, SetStateAction } from 'react'
import { useDebounce } from 'use-debounce'

// This hook is a drop-in replacement for useState, including overloads
// however it prevents state updates after the component has been unmounted
export function useDebouncedStateValue<S>(
  initialState: S | (() => S),
  time?: number
): [S, S, Dispatch<SetStateAction<S>>]

export function useDebouncedStateValue<S = undefined>(
  initialState: undefined,
  time?: number
): [S | undefined, S | undefined, Dispatch<SetStateAction<S | undefined>>]

export function useDebouncedStateValue<S = undefined>(
  initialState?: S | (() => S),
  time: number = 1000
): [S | undefined, S | undefined, Dispatch<SetStateAction<S | undefined>>] {
  const [state, setState] = useState(initialState)
  const [debouncedState] = useDebounce(state, time)

  return [debouncedState, state, setState]
}
