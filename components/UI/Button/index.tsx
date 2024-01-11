import React, { FC, ReactNode } from 'react'
import { StyledButton } from '@/components/UI/Button/styles'
import { Typography } from '@mui/material'

interface ButtonPropsType {
  children: string | ReactNode | string[]
  format: 'primary'
  onClick?: (params?: any) => void
  type?: 'button' | 'submit'
  size?: 'small' | 'medium' | 'large'
  startIcon?: string
  endIcon?: string
  disabled?: boolean
  loading?: boolean
  id?: string
}

const Button: FC<ButtonPropsType> = ({
  children,
  format,
  type = 'button',
  size = 'medium',
  disabled,
  loading,
  onClick,
  id,
}) => {
  return (
    <StyledButton
      variant="contained"
      disabled={disabled}
      loading={loading}
      onClick={onClick}
      size={size}
      format={format}
      type={type}
      id={id}>
      <Typography variant="button1">{children}</Typography>
    </StyledButton>
  )
}

export default Button
