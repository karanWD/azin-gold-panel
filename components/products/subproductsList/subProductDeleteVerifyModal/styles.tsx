import { Box, styled } from '@mui/material'

export const StyledSubproductsDeleteVerifyMoadal = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  width: '90%',
  maxWidth: '334px',
  padding: '20px',
  backgroundColor: theme.palette.primary.white,
  borderRadius: '16px',
  display: 'flex',
  flexDirection: 'column',
  rowGap: '12px',
  '& .header': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  '& .description': {
    color: theme.palette.txt.secondary,
  },
  '& .actions': {
    display: 'flex',
    columnGap: '24px',
    alignItems: 'center',
  },
}))
