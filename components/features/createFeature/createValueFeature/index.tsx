import React, { FC, useState } from 'react'
import { StyledCreateValue } from './styles'
import TextField from '@/components/UI/textField'

type Props = {
  editFeature?: boolean
  onChangeHandler: (value: string) => void
}
const InputValueFeature: FC<Props> = ({ onChangeHandler, editFeature }) => {
  const [value, setValue] = useState<string>()
  return (
    <StyledCreateValue>
      <TextField
        label={'مقدار'}
        className="create-header-Input"
        placeholder=" مقدار ویژگی را وارد کنید ."
        disabled={editFeature}
        onChange={(e) => {
          onChangeHandler(e.target.value)
          setValue(e.target.value)
        }}
        value={value}
        error={value===""}
        helperText={value === "" ? 'مقدار ویژگی را وارد کنید !' : ' '}
        required
      />
    </StyledCreateValue>
  )
}

export default InputValueFeature
