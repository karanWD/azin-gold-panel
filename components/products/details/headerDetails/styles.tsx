import { Box, BoxProps, styled } from '@mui/material'

export const StyledHeaderDetails = styled(Box)<BoxProps>(() => ({
  '.header-details': {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))
