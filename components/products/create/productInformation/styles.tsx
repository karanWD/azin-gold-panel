import { Box, styled } from '@mui/material'

export const StyledProductInformation = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  columnGap: '20px',
  rowGap: '20px',
  '.field-item': {
    width: 'calc(25% - 20px)',
  },
}))
