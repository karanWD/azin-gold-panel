import { Box, BoxProps, styled } from '@mui/material'
import { palette } from 'theme/palette'

export const StyledDetailsProductPage = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '24px',
  '.header-details': {
    display: 'flex',
    justifyContent: 'space-between',
  },
  '.header-box-sections': {
    backgroundColor: theme.palette.primary['white'],
    padding: '14px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  '.items-box-sections': {
    display: 'flex',
    columnGap: '10px',
  },
  '.item-product-details': {
    color: palette.txt['secondary'],
  },
  '.add-client-icon': {
    color: theme.palette.txt['brandSecondary'],
    position: 'relative',
    top: '6px',
    margin: '0 0 0 8px',
  },
  '.box-edit-button': {
    display: 'flex',
    columnGap: '10px',
    cursor: 'pointer',
  },
  '.set-edit-button': {
    marginRight: 'auto',
  },
}))
