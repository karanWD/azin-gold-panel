import React, { FC } from 'react'
import { StyledChip,StyledDetailsChip } from '@/components/UI/chip/styles'
import CloseIcon from '@mui/icons-material/Close'

type Props = {
  label: string
  format?: string
  handleDelete?: () => void
}
const Chip: FC<Props> = ({ label, handleDelete,format }) => {
  return (
     <StyledChip format={format} label={label} variant="outlined" onDelete={handleDelete} deleteIcon={<CloseIcon />} />
  )
}

export default Chip
