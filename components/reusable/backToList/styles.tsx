import { Box, BoxProps, styled } from '@mui/material'

export const StyledBackToList = styled(Box)<BoxProps>(({ theme }) => ({
  '.order-header-container': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  '.back-button': {
    display: 'flex',
    alignItems: 'center',
    columnGap: '8px',
    cursor: 'pointer',
  },
  '.order-detail-header': {
    marginTop: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: '16px',
    color: theme.palette.txt['brand'],
  },
}))
