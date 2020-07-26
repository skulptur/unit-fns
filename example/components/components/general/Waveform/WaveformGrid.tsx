import styled from 'styled-components'

interface WaveformGridProps {
  width: number
  height: number
  horizonalLineColor: string
  verticalLineColor: string
}

export const WaveformGrid = styled.div<WaveformGridProps>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-size: ${(props) => `${props.width}px ${props.height}px`};
  background-image: linear-gradient(
      to right,
      ${(props) => props.horizonalLineColor} 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, ${(props) => props.verticalLineColor} 1px, transparent 1px);
`
