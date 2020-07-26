import React from 'react'
import { WaveformCanvas } from './WaveformCanvas'
import { Box } from 'rebass'
import { Absolute } from '../Position'
import { WaveformGrid } from './WaveformGrid'
import { Zoom } from '../../../types/Zoom'
import { StereoAudioChannels } from '../../../types/Audio'

// TODO: get from theme
const channelColors = ['gold', 'cyan']

interface WaveformProps extends Zoom {
  overlap: boolean
  baseHeight: number
  stereoAudioChannels: StereoAudioChannels
}

export const Waveform: React.FC<WaveformProps> = ({
  baseHeight,
  overlap,
  xZoom,
  yZoom,
  stereoAudioChannels,
}) => {
  const halfHeight = (baseHeight * yZoom) / 2

  return (
    <Box overflowX='scroll'>
      {stereoAudioChannels.map((audioChannel, id) => {
        const color = channelColors[id % channelColors.length]
        return (
          <WaveformCanvas
            key={id}
            xZoom={xZoom * 25}
            yZoom={yZoom}
            strokeColor={color}
            height={baseHeight}
            before={
              <>
                {/* // TODO: get width from how many mixels is one beat */}
                <WaveformGrid
                  width={400 * xZoom}
                  height={halfHeight / 2}
                  horizonalLineColor='#222'
                  verticalLineColor='#222'
                />
                <Absolute top={halfHeight - 0.5} width='100%' backgroundColor='blue' height='1px' />
              </>
            }
            // after={<Box width='100%' backgroundColor='green' height='1px' />}
            audioChannel={audioChannel}
          />
        )
      })}
    </Box>
  )
}
