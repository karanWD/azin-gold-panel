import { Box, BoxProps, styled } from '@mui/material'

export const StyledCreateDescription = styled(Box)<BoxProps>(({ theme }) => ({
  marginLeft: '20px',
  '.create-description-Input': {
    backgroundColor: theme.palette.primary['white'],
    borderRadius: '8px',
    width: '320px',
    direction: 'rtl',
  },
  '.title-input': {
    display: 'block',
    color: theme.palette.txt['secondary'],
    marginBottom: '2px',
  },
}))
