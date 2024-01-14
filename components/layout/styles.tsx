import { Box, BoxProps, styled } from '@mui/material'

export const StyledLayout = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  '.sidebar-container': {
    flexBasis: '280px',
    padding: '42px 42px 0 0',
    height: '100vh',
    position: 'sticky',
    top: '0',
    right: '0',
  },
  '.content-container': {
    flex: '7',
    backgroundColor: '#F2F3F6',
    padding: '40px 32px 140px',
  },
}))
