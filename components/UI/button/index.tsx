import React, { FC, ReactNode } from 'react'
import { StyledButton } from '@/components/UI/button/styles'
import { CircularProgress, Typography } from '@mui/material'

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
  width?: string
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
  width,
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
      width={width}
      id={id}>
      {loading ? <CircularProgress /> : <Typography variant="button1">{children}</Typography>}
    </StyledButton>
  )
}

export default Button
