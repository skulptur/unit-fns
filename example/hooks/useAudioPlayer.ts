import { useRef, useCallback } from 'react'
import { Tuple } from '../lib/types/lib'

export const useAudioPlayer = (sampleRate: number) => {
  const audioCtx = useRef<AudioContext | null>(null)

  const playAudio = useCallback(
    ([left, right]: Tuple<Float32Array, Float32Array>) => {
      if (!audioCtx.current || sampleRate !== audioCtx.current.sampleRate) {
        audioCtx.current = new AudioContext({ sampleRate })
      }

      const ctx = audioCtx.current

      const myArrayBuffer = ctx.createBuffer(2, left.length, ctx.sampleRate)

      myArrayBuffer.copyToChannel(left, 0, 0)
      myArrayBuffer.copyToChannel(right, 1, 0)

      const source = ctx.createBufferSource()
      source.buffer = myArrayBuffer

      source.connect(ctx.destination)

      source.start()
    },
    [sampleRate]
  )

  return playAudio
}
