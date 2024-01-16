import { Button, styled } from '@mui/material'

export const StyledButton = styled(Button)<any>(({ theme, format, width, size }) => {
  const TYPES = {
    primary: {
      backgroundColor: theme.palette.bg.brand['A'],
      color: theme.palette.txt.primary,
      border: 'none',
    },
  }

  const SIZES = {
    small: {
      height: '28px',
      padding: '2px 12px',
    },
    medium: {
      height: '32px',
      padding: '2px 16px',
    },
    large: {
      height: '40px',
      padding: '2px 20px',
    },
    extra_large: {
      height: '48px',
      padding: '2px 24px',
    },
  }

  return {
    backgroundColor: TYPES[format].backgroundColor,
    color: TYPES[format].color,
    border: TYPES[format].border,
    height: SIZES[size].height,
    padding: SIZES[size].padding,
    width: width ? width : '100%',
    display: 'flex',
    alignItems: 'center',
    columnGap: '8px',
    borderRadius: '8px',
    boxShadow: 'none',
    '.MuiCircularProgress-root': {
      width: '32px !important',
      height: '32px !important',
      color: theme.palette.txt.tertiary,
    },
  }
})
