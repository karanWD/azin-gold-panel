import React, { FC } from 'react'
import { StyledTextField, StyledTextFieldContainer } from '@/components/UI/textField/styles'
import { TextFieldProps, Typography } from '@mui/material'

type InputProps = {
  label: string
} & TextFieldProps

const TextField: FC<InputProps> = ({ label, ...props }) => {
  return (
    <StyledTextFieldContainer>
      <Typography variant={'body3'} className="label-container">
        {label}
      </Typography>
      <StyledTextField {...props} />
    </StyledTextFieldContainer>
  )
}

export default TextField
