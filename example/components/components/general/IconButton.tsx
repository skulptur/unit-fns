import React from 'react'
import { Box } from 'rebass'
import { Icon } from './Icon/Icon'

type IconProps = React.ComponentProps<typeof Icon>
type PickedButtonProps = Pick<React.ComponentProps<typeof Box>, 'sx' | 'display' | 'padding'>

interface IconButtonProps extends IconProps, PickedButtonProps {
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  sx,
  display,
  padding = 1,
  ...props
}) => {
  return (
    <Box
      as='button'
      onClick={onClick}
      display={display}
      padding={padding}
      // tx='buttons' // leaving this for future reference.. is this used to grab the theme?
      sx={{
        color: 'white',
        bg: 'transparent',
        border: '0',
        ...sx,
      }}
    >
      <Icon {...props} />
    </Box>
  )
}
