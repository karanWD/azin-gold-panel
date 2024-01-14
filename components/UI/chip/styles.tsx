import { Chip, styled } from '@mui/material'

export const StyledChip = styled(Chip)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row-reverse',
  alignItems: 'center',
  columnGap: '8px',
  padding: '8px 20px',
  width: 'fit-content',
  border: `1px solid ${theme.palette.outline.brandSecondary}`,
  '& .MuiChip-label': {
    padding: 0,
    color: theme.palette.txt.secondary,
    fontSize: '14px',
  },
  '& .MuiChip-deleteIcon': {
    margin: 0,
    color: theme.palette.txt.secondary,
    fontSize: '16px',
  },
}))
