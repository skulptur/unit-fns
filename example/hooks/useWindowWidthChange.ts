import { useEffect, useRef } from 'react'
import { rafThrottle } from '../lib/utils/rafThrottle'

export const useWindowWidthChange = (callback: (width: number) => void, dependencies?: any[]) => {
  const lastWindowWidth = useRef(window.innerWidth)

  useEffect(() => {
    const cbk = rafThrottle(() => {
      const windowWidth = window.innerWidth
      if (windowWidth === lastWindowWidth.current) return
      lastWindowWidth.current = windowWidth
      callback(windowWidth)
    })

    window.addEventListener('resize', cbk)
    return () => {
      window.removeEventListener('resize', cbk)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies || [callback])
}
