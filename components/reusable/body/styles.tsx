import { Box, BoxProps, styled } from '@mui/material'

export const StyledBody = styled(Box)<BoxProps>(({ theme }) => ({
  '.pagination-container': {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  '.empty-list-container': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.white,
    borderRadius: '16px',
    padding: '12px',
    height: '50vh',
  },
}))
