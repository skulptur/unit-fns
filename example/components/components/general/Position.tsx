import React from 'react'
import { Box } from 'rebass'

interface PositionProps extends React.ComponentProps<typeof Box> {
  position: 'absolute' | 'relative' | 'fixed' | 'sticky'
}

export const Position: React.FC<PositionProps> = ({ sx, position, ...props }) => {
  return (
    <Box
      {...props}
      sx={{
        ...sx,
        position,
      }}
    />
  )
}

interface AbsoluteProps extends React.ComponentProps<typeof Box> {
  top?: number
  bottom?: number
  left?: number
  right?: number
  zIndex?: number
}

export const Absolute: React.FC<AbsoluteProps> = ({
  top,
  bottom,
  left,
  right,
  zIndex,
  ...props
}) => <Position {...props} position='absolute' sx={{ top, bottom, left, right, zIndex }} />

interface RelativeProps extends React.ComponentProps<typeof Box> {}

export const Relative: React.FC<RelativeProps> = (props) => (
  <Position {...props} position='relative' />
)

interface StickyProps extends React.ComponentProps<typeof Box> {}

export const Sticky: React.FC<StickyProps> = (props) => <Position {...props} position='sticky' />

interface FixedProps extends React.ComponentProps<typeof Box> {}

export const Fixed: React.FC<FixedProps> = (props) => <Position {...props} position='fixed' />
