import React, { useState } from 'react'

import { Scalar } from '../../../lib/number/scalar/scalar'
import { Waveform } from './Waveform'

import { scaling } from './canvasRenderer/drawWaveform'
import { useScalar } from '../../../hooks/useScalar'
import { StereoAudioChannels } from '../../../types/Audio'

import { ZoomButtons } from '../ZoomButtons'
import { Absolute, Relative } from '../Position'
import { useBoolean } from '../../../hooks/useBoolean'

const useWaveformControls = (step: Scalar) => {
  const [xZoom, setxZoom, increaseX, decreaseX] = useScalar(0.25 as Scalar, step)
  const [yZoom, setyZoom, increaseY, decreaseY] = useScalar(0.5 as Scalar, step)
  const [isHovering, onMouseEnter, onMouseLeave] = useBoolean(false)

  return {
    isHovering,
    onMouseEnter,
    onMouseLeave,
    xZoom,
    setxZoom,
    increaseX,
    decreaseX,
    yZoom,
    setyZoom,
    increaseY,
    decreaseY,
  }
}

interface WaveformWithControlsProps {
  stereoAudioChannels: StereoAudioChannels
}

export const WaveformWithControls: React.FC<WaveformWithControlsProps> = ({
  stereoAudioChannels,
}) => {
  const {
    isHovering,
    onMouseEnter,
    onMouseLeave,
    xZoom,
    increaseX,
    decreaseX,
    yZoom,
    increaseY,
    decreaseY,
  } = useWaveformControls(0.05 as Scalar)

  return (
    <Relative onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {isHovering && (
        <>
          <Absolute zIndex={1} left={1} top={1}>
            <ZoomButtons onIncrease={increaseX} onDecrease={decreaseX} />
          </Absolute>
          <Absolute zIndex={1} top={1} right={1}>
            <ZoomButtons onIncrease={increaseY} onDecrease={decreaseY} display='block' />
          </Absolute>
        </>
      )}

      <Waveform
        stereoAudioChannels={stereoAudioChannels}
        xZoom={xZoom}
        yZoom={yZoom}
        baseHeight={scaling.y}
        overlap={false}
      />
    </Relative>
  )
}
