import { Box, styled } from '@mui/material'

export const StyledProductFeature = styled(Box)(() => ({
  '.product-feature-options': {
    display: 'inline-block',
  },
  '.option-disabled': {
    pointerEvents: 'none',
  },
  '.feature-select': {
    minWidth: '340px',
  },
}))
