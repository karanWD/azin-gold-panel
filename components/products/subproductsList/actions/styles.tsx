import { Box, styled } from '@mui/material'

export const StyledActions = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  columnGap: '16px',
  '.action-item': {
    cursor: 'pointer',
  },
}))
