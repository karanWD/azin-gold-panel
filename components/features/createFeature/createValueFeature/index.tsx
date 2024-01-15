import React, { FC } from 'react'
import { StyledCreateValue } from './styles'
import TextField from '@/components/UI/textField'

type Props = {
  editFeature?: boolean
  onChangeHandler: (value: string) => void
}
const InputValueFeature: FC<Props> = ({ onChangeHandler, editFeature }) => {
  return (
    <StyledCreateValue>
      <TextField
        label={'مقدار'}
        className="create-header-Input"
        placeholder=" مقدار ویژگی را وارد کنید ."
        required
        disabled={editFeature}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
    </StyledCreateValue>
  )
}

export default InputValueFeature
