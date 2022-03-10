import * as React from 'react'
import { useParams } from 'react-router-dom'
import { clamp } from '../utils/clamp'
import { Unit } from '../../../src'
import { ImageData } from './ImageData'

type RendererBaseProps = {
  width: number
  height: number
}

type Renderer2d = {
  kind: '2d'
  sketches: Array<(x: Unit, y: Unit) => Unit>
} & RendererBaseProps

type Renderer3d = {
  kind: '3d'
  sketches: Array<(x: Unit, y: Unit, z: Unit) => Unit>
} & RendererBaseProps

export type RendererProps = Renderer2d | Renderer3d

export const Renderer = ({ sketches, kind, width, height }: RendererProps) => {
  const params = useParams<{ id: string }>()
  const currentId = parseInt(params.id || '0', 10)

  const goTo = (targetId: number) => {
    const redirectId = clamp(targetId, 0, sketches.length - 1)
    if (redirectId === currentId) return
    location.href = `${location.origin}/${redirectId}`
  }

  const onNavigate = (targetId: number) => () => goTo(targetId)

  React.useEffect(() => {
    if (currentId < 0 || currentId > sketches.length - 1) {
      goTo(0)
    }
  }, [currentId])

  return (
    <div>
      <button onClick={onNavigate(currentId - 1)}>previous</button>
      <button onClick={onNavigate(currentId + 1)}>next</button>
      <div key={currentId}>
        {kind === '2d' && (
          <ImageData
            width={width}
            height={height}
            onSample={sketches[currentId]}
          />
        )}
      </div>
    </div>
  )
}
