import { Box, styled, TextField } from '@mui/material'

export const StyledTextField = styled(TextField)<any>(({ theme }) => ({
  '& .MuiInputBase-root': {
    padding: '8px 12px',
    display: 'flex',
    alignItems: 'center',
    columnGap: '8px',
    borderRadius: '8px',
  },
  '& .MuiInputBase-input': {
    height: 'unset',
    padding: '0',
    fontSize: '16px',
    lineHeight: '32px',
    position: 'relative',
    '&::placeholder': {
      fontSize: '16px',
      color: theme.palette.txt.brand,
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
  '.MuiFormHelperText-root ': {
    textAlign: 'right',
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
