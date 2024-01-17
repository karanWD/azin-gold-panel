import { Box, styled } from '@mui/material'

export const StyledProductGroups = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '32px',
  '.button-container': {
    marginLeft: '0',
    marginRight: 'auto',
  },
}))
