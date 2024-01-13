import React, { FC } from 'react'
import { StyledTextField, StyledTextFieldContainer } from '@/components/UI/textField/styles'
import { TextFieldProps, Typography } from '@mui/material'

type InputProps = {
  label: string
} & TextFieldProps

const TextField: FC<InputProps> = ({ label, ...rest }) => {
  return (
    <StyledTextFieldContainer>
      <Typography variant={'body3'} className="label-container">
        {label}
      </Typography>
      <StyledTextField {...rest} />
    </StyledTextFieldContainer>
  )
}

export default TextField
