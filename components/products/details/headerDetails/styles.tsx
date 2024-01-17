import { Box, BoxProps, styled } from '@mui/material'

export const StyledHeaderDetails = styled(Box)<BoxProps>(() => ({
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
}))
