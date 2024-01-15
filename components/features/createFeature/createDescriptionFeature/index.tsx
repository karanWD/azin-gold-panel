import React, { FC } from 'react'
import { StyledCreateDescription } from './styles'
import TextField from '@/components/UI/textField'

type Props = {
  editFeature?: boolean
  onChangeHandler: (value: string) => void
}
const InputDescriptionFeature: FC<Props> = ({ onChangeHandler, editFeature }) => {
  return (
    <StyledCreateDescription>
      <TextField
        label={'توضیح ویژگی'}
        className="create-description-Input"
        disabled={editFeature}
        placeholder=" توضیح ویژگی را وارد کنید ."
        onChange={(e) => onChangeHandler(e.target.value)}
      />
    </StyledCreateDescription>
  )
}

export default InputDescriptionFeature
