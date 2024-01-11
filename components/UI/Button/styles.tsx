import { Button, styled } from '@mui/material'

export const StyledButton = styled(Button)<any>(({ theme, format }) => {
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
    display: 'flex',
    flex: '1 1 0',
    alignItems: 'center',
    columnGap: '8px',
    borderRadius: '8px',
    boxShadow: 'none',
    padding: '8px 24px',
  }
})
