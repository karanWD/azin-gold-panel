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
    display: 'flex',
    justifyContent: 'space-between',
  },
  '.items-box-sections': {
    display: 'flex',
    columnGap: "10px",
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
    flexWrap: "wrap",
    rowGap: "10px",
    columnGap: "10px",
  },
  '.box-chaild-details': {
    display: 'flex',
    flexDirection: 'column',
    marginRight: '10px',
  },
  ".input-edit": {
    width: "380px",
  },
  '.add-client-icon': {
    color: theme.palette.txt['brandSecondary'],
    position: 'relative',
    top: '6px',
    margin: '0 0 0 8px',
  },
  ".box-edit-button": {
    display: 'flex',
    columnGap: "10px",
    cursor: "pointer"
  },
  ".set-edit-button": {
    marginRight: "auto"
  }
}))
