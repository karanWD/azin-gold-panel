import { Box, BoxProps, styled } from '@mui/material'
import { palette } from 'theme/palette'

export const StyledDetailsProductPage = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '24px',
  '.box-item': {
    borderRadius: '16px',
  },
  '.back-to-list': {
    display: 'flex',
    cursor: 'pointer',
  },
  '.back-icon': {
    margin: '3px',
    rotate: '180deg',
  },
  '.header-details': {
    display: 'flex',
    justifyContent: 'space-between',
  },
  '.header-box-sections': {
    backgroundColor: theme.palette.primary['white'],
    padding: '14px',
    borderRadius: '8px',
    width: '400px !important',
  },
  '.items-box-sections': {
    display: 'flex',
    columnGap: '10px',
  },
  '.value-sell': {
    borderRadius: '16px',
    backgroundColor: theme.palette.primary['white'],
    padding: '14px',
    margin: '0 20px 0 20px',
    height: '70px',
    width: '250px',
  },
  '.box-sell': {
    display: 'flex',
  },
  '.title-box-sell': {
    color: palette.txt['secondary'],
  },
  '.item-product-details': {
    color: palette.txt['secondary'],
  },
  '.box-details': {
    display: 'flex',
  },
  '.box-chaild-details': {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '10px',
    marginRight: '10px',
    width: '300px',
    marginLeft: '150px',
  },
  '.box-data-product': {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))
