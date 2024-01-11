import { Box, styled } from '@mui/material'

export const StyledProductFeature = styled(Box)(() => ({
  direction: 'rtl',
  '.product-feature-options': {
    display: 'inline-block',
  },
  '.feature-select': {
    minWidth: '340px',
  },
  '.MuiSelect-icon': {
    left: '7px',
    right: 'unset',
  },
  '.MuiMenuItem-root': {
    width: '100%',
  },
  '.MuiInputLabel-root': {
    right: 0,
    left: 'unset',
    transform: 'translate(-14px, 9px) scale(1)',
  },
}))
