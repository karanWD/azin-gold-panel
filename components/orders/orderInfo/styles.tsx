import { Box, BoxProps, styled } from '@mui/material'

export const StyledOrderInfo = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette['white'],
  padding: '20px',
  borderRadius: '12px',
  display: 'flex',
  columnGap: '149px',
  '.order-info-columns': {
    flex: '1 1 0',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '8px',
  },
  '.order-info-item-container': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '.order-info-item-title': {
      color: theme.palette.txt.secondary,
    },
    '.order-info-item-value': {
      color: theme.palette.txt.brand,
    },
  },
}))
