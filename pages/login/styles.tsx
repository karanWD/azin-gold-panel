import { Box, styled } from '@mui/material'

export const StyledLoginPage = styled(Box)(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.bg.neutral['B'],

  '.login-form': {
    maxWidth: '460px',
    width: '95%',
    borderRadius: '16px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: '40px',
    backgroundColor: theme.palette.primary.white,
    '.login-fields': {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      rowGap: '16px',
    },
  },
}))
