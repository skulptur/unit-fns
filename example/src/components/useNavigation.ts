import * as React from 'react'
import { useParams } from 'react-router-dom'
import { clamp } from '../utils/clamp'

export const useNavigation = (total: number) => {
  const params = useParams<{ id: string }>()
  const currentId = parseInt(params.id || '0', 10)

  const goTo = (targetId: number) => {
    const redirectId = clamp(targetId, 0, total - 1)
    if (redirectId === currentId) return
    location.href = `${location.origin}/${redirectId}`
  }

  const onNavigate = (targetId: number) => () => goTo(targetId)

  React.useEffect(() => {
    if (currentId < 0 || currentId > total - 1) {
      goTo(0)
    }
  }, [currentId])

  return {
    previous: onNavigate(currentId - 1),
    next: onNavigate(currentId + 1),
    currentId,
  }
}
