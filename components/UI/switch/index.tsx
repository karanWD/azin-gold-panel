import React, { FC } from 'react'
import { StyledSwitch } from '@/components/UI/switch/styles'

interface SwitchPropTypes {
  checked: boolean
  onChange: (e: any) => void
  disabled?: boolean
  name?: string
  size?: 'small' | 'medium'
}

const Switch: FC<SwitchPropTypes> = ({ name, checked, onChange, disabled, size = 'small' }) => {
  return (
    <StyledSwitch
      name={name}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      focusVisibleClassName=".Mui-focusVisible"
      size={size}
    />
  )
}
export default Switch
