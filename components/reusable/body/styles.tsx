import { Box, BoxProps, styled } from '@mui/material'

export const StyledBody = styled(Box)<BoxProps>(() => ({
  '.pagination-container': {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
}))
