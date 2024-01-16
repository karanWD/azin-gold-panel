import { Box, BoxProps, styled } from '@mui/material'

export const StyledAddFeatureModal = styled(Box)<BoxProps>(({ theme }) => ({
  '.add-features': {
    marginTop: '10px',
    color: theme.palette.txt['brandSecondary'],
  },
  '.add-features-icon': {
    color: theme.palette.txt['brandSecondary'],
    position: 'relative',
    top: '6px',
    margin: '0 0 0 8px',
  },
  '.box-child': {
    margin: '0 20px 0 0',
    cursor: 'pointer',
  },
}))
