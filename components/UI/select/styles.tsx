import { Box, styled } from '@mui/material'

export const StyledSelect = styled(Box)(({ theme }) => ({
  direction: 'rtl',
  '.select-label': {
    color: theme.palette.txt.secondary,
  },
  '.MuiSelect-icon': {
    left: '7px',
    right: 'unset',
  },
  '.MuiMenuItem-root': {
    width: '100%',
  },
  '.MuiInputLabel-root': {
    right: 0,
    left: 'unset',
    transform: 'translate(-14px, 9px) scale(1)',
  },
}))
