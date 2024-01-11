import { Box, styled } from '@mui/material'

export const StyledCreateProduct = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '32px',
  '.primary-button': {
    backgroundColor: theme.palette.bg.brand,
    color: theme.palette.txt.white,
  },
  '.submit-button-container': {
    width: 'fit-content',
    marginLeft: '0',
    marginRight: 'auto',
  },
}))
