import React, { FC, useState } from 'react'
import { StyledTextField, StyledTextFieldContainer } from '@/components/UI/textField/styles'
import { IconButton, InputAdornment, TextFieldProps, Typography } from '@mui/material'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'

type InputProps = {
  label: string
  startIcon?: any
  endIcon?: any
  size?: 'small' | 'medium'
} & TextFieldProps

const TextField: FC<InputProps> = ({ label, startIcon, endIcon, type, size = 'medium', ...rest }) => {
  const [showPass, setShowPass] = useState(false)
  return (
    <StyledTextFieldContainer>
      <Typography variant={'body3'} className="label-container">
        {label}
      </Typography>
      <StyledTextField
        size={size}
        variant="outlined"
        InputProps={{
          startAdornment: <InputAdornment position="start">{startIcon}</InputAdornment>,
          endAdornment: (
            <InputAdornment position="end">
              {type === 'password' ? (
                <IconButton onClick={() => setShowPass((prev) => !prev)} edge="end">
                  {showPass ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                </IconButton>
              ) : (
                endIcon
              )}
            </InputAdornment>
          ),
        }}
        type={type === 'password' ? (showPass ? 'text' : 'password') : type}
        {...rest}
      />
    </StyledTextFieldContainer>
  )
}

export default TextField
