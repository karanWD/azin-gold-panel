import React, { FC, ReactNode } from 'react'
import { FormControl, InputLabel, OutlinedInput, Select, Typography } from '@mui/material'
import { StyledSelect } from '@/components/UI/select/styles'

type Props = {
  label?: string
  placeHolder?: string
  changeHandler: (value: string) => void
  value: string
  children: ReactNode
}
const SelectBox: FC<Props> = ({ label, placeHolder, value, changeHandler, children }) => {
  return (
    <StyledSelect>
      {label && (
        <Typography component="div" className="select-label" variant="body3">
          {label}
        </Typography>
      )}
      <FormControl className="feature-select" size="small">
        {placeHolder && (
          <InputLabel>
            <Typography className="select-label" variant="body3">
              {placeHolder}
            </Typography>
          </InputLabel>
        )}
        <Select
          value={value}
          label={placeHolder}
          className="select-status-container"
          size={'small'}
          input={<OutlinedInput />}
          MenuProps={{
            sx: {
              '& .MuiOutlinedInput-notchedOutline': {
                display: 'none',
                backgroundColor: 'red',
              },
              '& .MuiPaper-root': {
                maxHeight: '320px',
              },
              '& .MuiButtonBase-root': {
                width: '100%',
              },
              '& .options-container': {
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
              },
            },
          }}
          onChange={(e) => changeHandler(e.target.value as string)}>
          {children}
        </Select>
      </FormControl>
    </StyledSelect>
  )
}

export default SelectBox
