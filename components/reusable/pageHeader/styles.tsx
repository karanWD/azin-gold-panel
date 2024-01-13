import { Box, BoxProps, styled } from '@mui/material'

export const StyledPageHeader = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '.page-title': {
    color: theme.palette.txt.brand,
    display: 'flex',
    alignItems: 'center',
    columnGap: '24px',
  },
  '.profile-container': {
    display: 'flex',
    columnGap: '8px',
    alignItems: 'center',
  },
  '.username-container': {
    color: theme.palette.txt['brand'],
  },
  '.welcome-message': {
    color: theme.palette.txt['tertiary'],
  },
}))
