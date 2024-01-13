import { Button, styled } from '@mui/material'

export const StyledButton = styled(Button)<any>(({ theme, format, width }) => {
  const TYPES = {
    primary: {
      backgroundColor: theme.palette.bg.brand['A'],
      color: theme.palette.txt.primary,
      border: 'none',
    },
  }

  return {
    backgroundColor: TYPES[format].backgroundColor,
    color: TYPES[format].color,
    border: TYPES[format].border,
    width: width ? width : '100%',
    display: 'flex',
    flex: '1 1 0',
    alignItems: 'center',
    columnGap: '8px',
    borderRadius: '8px',
    boxShadow: 'none',
    padding: '8px 16px',
    '.MuiCircularProgress-root': {
      width: '32px !important',
      height: '32px !important',
      color: theme.palette.txt.tertiary,
    },
  }
})
