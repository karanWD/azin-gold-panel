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
        onChange={(e) => setAmountInput(e.target.value)}
        error={amountInput===""}
        helperText={amountInput === "" ? 'عنوان ویژگی را وارد کنید !' : ' '}
        required
      />
    </StyledCreateHeader>
  )
}

export default InputHeaderFeature
