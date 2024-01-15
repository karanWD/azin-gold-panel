import { Box, BoxProps, styled } from '@mui/material'

export const StyledCreateImage = styled(Box)<BoxProps>(({ theme }) => ({
  marginLeft: '20px',
  '.image-Input': {
    backgroundColor: theme.palette.primary['white'],
    borderRadius: '5px',
    width: '320px',
    direction: 'ltr',
    border: `1px solid ${theme.palette.outline['secondary']}`,
  },
  '.image-Input::file-selector-button': {
    backgroundColor: theme.palette.primary['black'],
    borderRadius: '2px',
    color: theme.palette.primary['white'],
    dairection: 'rtl',
    width: '80px',
    height: '40px',
    direction: 'rtl',
    border: `1px solid ${theme.palette.primary['300']}`,
  },
  '.title-input': {
    display: 'block',
    color: theme.palette.txt['secondary'],
    marginBottom: '2px',
  },
}))
