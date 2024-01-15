import React, { FC } from 'react'
import { StyledCreateHeader } from './styles'
import TextField from '@/components/UI/textField'

type Props = {
  amountInput: string
  setAmountInput: (value: string) => void
}
const InputHeaderFeature: FC<Props> = ({ amountInput, setAmountInput }) => {
  return (
    <StyledCreateHeader>
      <TextField
        label={'عنوان'}
        className="create-header-Input"
        placeholder=" عنوان ویژگی را وارد کنید ."
        value={amountInput}
        required
        onChange={(e) => setAmountInput(e.target.value)}
      />
    </StyledCreateHeader>
  )
}

export default InputHeaderFeature
