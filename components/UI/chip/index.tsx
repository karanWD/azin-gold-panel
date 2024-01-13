import React, { FC } from 'react'
import { StyledChip } from '@/components/UI/chip/styles'
import CloseIcon from '@mui/icons-material/Close'

type Props = {
  label: string
  handleDelete?: () => void
}
const Chip: FC<Props> = ({ label, handleDelete }) => {
  return (
    <StyledChip
      label={label}
      variant="outlined"
      onDelete={handleDelete}
      deleteIcon={<CloseIcon />}
    />
  )
}

export default Chip
