import { Box, styled, TextField } from '@mui/material'

export const StyledTextField = styled(TextField)<any>(({ theme, size }) => {
  const SIZES = {
    small: {
      padding: '6px 12px',
      fontSize: '14px',
      lineHeight: '28px',
    },
    medium: {
      padding: '8px 12px',
      fontSize: '16px',
      lineHeight: '32px',
    },
  }
  return {
    '& .MuiInputBase-root': {
      padding: SIZES[size].padding,
      display: 'flex',
      alignItems: 'center',
      columnGap: '8px',
      borderRadius: '8px',
    },
    '& .MuiInputBase-input': {
      fontSize: SIZES[size].fontSize,
      lineHeight: SIZES[size].lineHeight,
      height: 'unset',
      padding: '0',
      position: 'relative',
      '&::placeholder': {
        fontSize: SIZES[size].fontSize,
        lineHeight: SIZES[size].lineHeight,
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
  }
})
export const StyledTextFieldContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '4px',
  '.label-container': {
    color: theme.palette.txt.secondary,
  },
}))
