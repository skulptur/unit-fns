import React from 'react'
import * as icons from './icons'
import { useTheme } from '../../../hooks/useTheme'
import { StyledIcon } from '@styled-icons/styled-icon'

interface IconProps extends Omit<StyledIcon, '$$typeof'> {
  name: keyof typeof icons
  width?: number
}

export const Icon: React.FC<IconProps> = ({ name, width = 40, ...props }) => {
  const theme = useTheme()

  const Component = icons[name]
  return <Component color={theme.colors.text} width={width} {...props} />
}
