import { Box, OutlinedInput, styled } from '@mui/material'

export const StyledTextField = styled(OutlinedInput)<any>(({ theme }) => ({
  '& .MuiInputBase-input': {
    fontSize: '14px',
    position: 'relative',
    borderRadius: '8px',
    border: '1px solid ' + theme.palette.outline.tertiary + ' !important',
    padding: '6px 12px',
    transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
    '&::placeholder': {
      color: theme.palette.txt.brand,
      fontSize: '14px',
    },
    '.Mui-focused': {
      '.MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.outline.brand,
        borderWidth: '1px',
      },
    },
  },
  '.MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.outline.tertiary,
    borderRadius: '8px',
  },
}))

export const StyledTextFieldContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '4px',
  '.label-container': {
    color: theme.palette.txt.secondary,
  },
}))
