import { Box, BoxProps, styled } from '@mui/material'

export const StyledEmptyList = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  rowGap: '16px',
}))
