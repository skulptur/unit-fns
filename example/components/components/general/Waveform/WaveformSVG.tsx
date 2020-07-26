import React, { useMemo } from 'react'
import styled from 'styled-components'
import { AudioChannel } from '../../../types/Audio'

const Box = styled.div`
  background: #333;
  padding: 4px;
  overflow: hidden;
  border: 1px solid #222;
`

interface Props {
  audioChannel: AudioChannel
  xZoom?: number
  yZoom?: number
  strokeColor?: string // TODO: use type of css/svg colors
  xScale?: number
  yScale?: number
}

export const WaveformSVG: React.FC<Props> = ({
  audioChannel,
  xZoom = 1,
  yZoom = 1,
  xScale = 0.05,
  yScale = 100,
  strokeColor = 'gold',
}) => {
  const lines = useMemo(
    () =>
      audioChannel.reduce((acc, point, i) => {
        return acc + `L${i * xScale * xZoom} ${point * yScale * yZoom + yScale} `
      }, ''),
    [audioChannel, xZoom, yZoom]
  )

  const moveCenter = `M0 ${yScale}`

  return (
    <Box>
      <svg
        height={yScale * 2}
        width={audioChannel.length * xScale * xZoom}
        stroke={strokeColor}
        fill='none'
      >
        <path d={`${moveCenter} ${lines}${moveCenter} Z`} />
      </svg>
    </Box>
  )
}
