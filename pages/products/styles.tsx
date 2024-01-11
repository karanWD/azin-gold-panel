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
  '.create-product-button': {
    display: 'flex',
    alignItems: 'center',
    columnGap: '4px',
    color: theme.palette.primary.main,
  },
}))

export const StyledItemBox = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette['white'],
  padding: '24px',
  margin: '24px',
  borderRadius: '16px',
  'title-item': {
    color: theme.palette.txt['brand'],
  },
}))
