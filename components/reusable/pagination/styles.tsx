import { Box, styled } from '@mui/material'

export const StyledPagination = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  '.MuiPaginationItem-root.Mui-selected': {
    backgroundColor: theme.palette.bg.brand['A'],
    color: theme.palette.primary.white,
  },
}))
