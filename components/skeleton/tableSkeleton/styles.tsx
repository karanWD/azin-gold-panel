import { Box, BoxProps, styled, Table } from '@mui/material'

export const StyledContainer = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary['white'],
  padding: '24px',
  borderRadius: '16px',
}))

export const StyledTable = styled(Table)(({ theme }) => ({
  '.MuiTableCell-root': {
    borderColor: theme.palette.outline['disabled'],
    padding: '0',
  },
  '.MuiTableCell-head': {
    padding: '0',
    display: 'flex',
    alignItems: 'center',
    columnGap: '16px',
  },
  '.MuiTableCell-body': {
    height: '69px',
    padding: '0',
  },
}))
