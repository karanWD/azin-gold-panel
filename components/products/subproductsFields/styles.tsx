import { Box, styled } from '@mui/material'

export const StyledSubproductFields = styled(Box)(({ theme }) => ({
  '.field-titles': {
    display: 'flex',
    padding: '12px 24px',
    borderRadius: '8px',
    backgroundColor: theme.palette.primary.white,
    color: theme.palette.txt.secondary,
    '& .field-titles-item': {
      flex: '1 1 0',
      display: 'flex',
      flexDirection: 'column',
      rowGap: '8px',
    },
    '& .divider': {
      borderColor: theme.palette.bg.neutral['B'],
    },
    '.field-body': {
      display: 'flex',
      alignItems: 'center',
      padding: '10px 0',
      marginLeft: '20px',
    },
  },
  '.field-actions': {
    height: '100%',
    display: 'flex',
    columnGap: '16px',
    alignSelf: 'flex-end',
    padding: '10px 5px',
  },
}))
