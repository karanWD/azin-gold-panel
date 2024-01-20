import { Box, BoxProps, styled } from '@mui/material'

export const StyledSectionsDetails = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '24px',
  '.items-box-sections': {
    display: 'flex',
    columnGap: '10px',
  },
}))
