import React, { FC, useState } from 'react'
import { StyledCreateSort } from './styles'
import TextField from '@/components/UI/textField'

type Props = {
  editFeature?: boolean
  onChangeHandler: (value: string) => void
}
const InputSortFeature: FC<Props> = ({ onChangeHandler, editFeature }) => {
  const [value, setValue] = useState<string>()
  return (
    <StyledCreateSort>
      <TextField
        label={'ترتیب نمایش'}
        className="create-sort-Input"
        disabled={editFeature}
        onChange={(e) => {
          onChangeHandler(e.target.value)
          setValue(e.target.value)
        }}
        value={value}
        error={value===""}
        helperText={value === "" ? 'ترتیب نمایش را وارد کنید !' : ' '}
        required
      />
    </StyledCreateSort>
  )
}

export default InputSortFeature
