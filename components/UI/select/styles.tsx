import { Box, BoxProps, styled } from '@mui/material'

interface selectType extends BoxProps {
  width: string
}
export const StyledSelect = styled(Box)<selectType>(({ theme, width }) => ({
  width: width,
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
  '.MuiOutlinedInput-notchedOutline': {
    borderRadius: '8px',
  },
}))
