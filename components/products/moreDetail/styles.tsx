import { Box, BoxProps, styled } from '@mui/material'

export const StyledMoreDetail = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  minWidth: 'unset',
  '.more-button': {
    display: 'flex',
    minWidth: 'unset',
    width: '100%',
    height: '24px',
    position: 'relative',
    margin: '0 auto',
    cursor: 'pointer',
    opacity: '0.7',
    '&:hover': {
      backgroundColor: 'transparent',
      opacity: '1',
    },
    '.box-block': {
      display: 'block',
    },
  },
  '.box-more': {
    display: 'flex',
    flexDirection: 'column',
  },
}))
