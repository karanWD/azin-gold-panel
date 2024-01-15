import React, { FC } from 'react'
import { StyledCreateSort } from './styles'
import TextField from '@/components/UI/textField'

type Props = {
  editFeature?: boolean
  onChangeHandler: (value: string) => void
}
const InputSortFeature: FC<Props> = ({ onChangeHandler, editFeature }) => {
  // const [valueInput, setValueInput] = useState<string>('1')
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
