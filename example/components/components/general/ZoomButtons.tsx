import React from 'react'
import { Box } from 'rebass'
import { IconButton } from './IconButton'

interface ZoomButtonsProps {
  display?: 'inline-block' | 'block'
  onIncrease: () => void
  onDecrease: () => void
}

export const ZoomButtons: React.FC<ZoomButtonsProps> = ({
  display = 'inline-block',
  onIncrease,
  onDecrease,
}) => {
  return (
    <Box backgroundColor='rgba(0,0,0,0.4)' display='inline-block' sx={{ borderRadius: 10 }}>
      <IconButton name='zoomIn' width={20} onClick={onIncrease} display={display} padding={2} />
      <IconButton name='zoomOut' width={20} onClick={onDecrease} display={display} padding={2} />
    </Box>
  )
}
