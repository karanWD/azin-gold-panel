import { Box, BoxProps, styled } from '@mui/material'

export const StyledCreateImage = styled(Box)<BoxProps>(({ theme }) => ({
  marginLeft: '20px',
  '.title-input': {
    display: 'block',
    color: theme.palette.txt['secondary'],
    marginBottom: '2px',
  },
  '& .upload-file-container': {
    width: '320px',
    border: `1px solid ${theme.palette.outline.tertiary}`,
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '4px',
    '& .title': {
      color: theme.palette.txt.tertiary,
    },
    '& .upload-button': {
      height: '32px',
      padding: '5px 16px',
      borderRadius: '8px',
      backgroundColor: theme.palette.bg.brand['A'],
      color: theme.palette.primary.white,
    },
    '& .file-input': {
      display: 'none',
    },
  },
}))
