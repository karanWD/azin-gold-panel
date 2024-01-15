import { Box, BoxProps, styled } from '@mui/material'

export const StyledPropertyPage = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '24px',
  '.box-item': {
    borderRadius: '16px',
  },
}))
