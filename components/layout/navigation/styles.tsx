import { Box, BoxProps, styled } from '@mui/material'

export const StyledNavigation = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  rowGap: '48px',
  flexDirection: 'column',
  '.links-container': {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '16px',
  },
}))
