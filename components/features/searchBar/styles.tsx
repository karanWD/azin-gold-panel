import { Box, BoxProps, styled, TextField, TextFieldProps } from '@mui/material'

export const StyledContainer = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary['white'],
  padding: '24px',
  borderRadius: '16px',
  '.search-Input': {
    backgroundColor: theme.palette.primary['white'],
    borderRadius: '1px',
    width: '376px',
    direction: 'rtl',
    '::placeholder': {
      color: 'black',
    },
  },
  '.header-search': {
    display: 'block',
    color: theme.palette.txt['secondary'],
    marginBottom: '2px',
  },
  '.icon-search': {
    width: '24px',
    height: '24px',
  },
}))
