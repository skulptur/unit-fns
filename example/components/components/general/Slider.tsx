import React from 'react'
import styled from 'styled-components'
import { Scalar } from '../lib/number/scalar/scalar'

const Range = styled.input``

interface Props {
  label: string
  value: Scalar
  onChange: (val: Scalar) => void
  onBlur?: () => void
}

export const Slider: React.FC<Props> = ({ label, value, onChange, onBlur }) => {
  return (
    <div>
      <label>{label}</label>
      <br />
      <Range
        type='range'
        min='0'
        max='1'
        step='0.001'
        value={value}
        onBlur={onBlur}
        onChange={(e) => onChange(parseFloat(e.target.value) as Scalar)}
      />
    </div>
  )
}
