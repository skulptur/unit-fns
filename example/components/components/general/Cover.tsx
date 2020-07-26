import React from 'react'
import { Absolute } from './general/Position'

interface CoverProps extends React.ComponentProps<typeof Absolute> {}

export const Cover: React.FC<CoverProps> = ({ sx, ...props }) => {
  return <Absolute top={0} bottom={0} left={0} right={0} {...props} />
}
