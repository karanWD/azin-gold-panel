import { Box, BoxProps, styled } from '@mui/material'

export const StyledAddFeatureModal = styled(Box)<BoxProps>(() => ({
  '.add-features': {
    marginTop: '10px',
  },
  '.add-features-icon': {
    position: 'relative',
    top: '8px',
    margin: '0 0 0 8px',
  },
  '.box-child': {
    margin: '0 20px 0 0',
  },
}))
