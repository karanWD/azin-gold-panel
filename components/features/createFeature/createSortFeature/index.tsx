import React, { FC, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { StyledCreateSort } from './styles'
import { StyledTextField } from '@/components/UI/textField/styles'
import TextField from '@/components/UI/textField'

type Props = {
  editFeature?: boolean
  onChangeHandler: (value: string) => void
}
const InputSortFeature: FC<Props> = ({ onChangeHandler, editFeature }) => {
  const [valueInput, setValueInput] = useState<string>('1')
  return (
    <StyledCreateSort>
      <TextField
        label={'ترتیب نمایش'}
        className="create-sort-Input"
        required
        disabled={editFeature}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
    </StyledCreateSort>
  )
}

export default InputSortFeature
