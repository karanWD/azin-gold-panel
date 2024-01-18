import { Box, BoxProps, styled } from '@mui/material'

export const StyledProductsPage = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '24px',
  '.box-item': {
    borderRadius: '16px',
  },
  '.pagination-container': {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  '.add-product-button': {
    display: 'flex',
    alignItems: 'center',
    columnGap: '8px',
    color: theme.palette.txt.brandSecondary,
  },
}))

export const StyledItemBox = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.bg['white'],
  padding: '24px',
  margin: '24px',
  borderRadius: '16px',
  'title-item': {
    color: theme.palette.txt[900],
  },
}))
