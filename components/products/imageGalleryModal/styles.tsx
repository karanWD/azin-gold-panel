import { Box, styled } from '@mui/material'

export const StyledGalleryModal = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.white,
  height: '660px',
  width: '644px',
  position: 'fixed',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '16px',
  '& .gallery-modal-header': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '12px',
  },
  '& .description': {
    marginBottom: '12px',
  },
  '& .upload-file-container': {
    maxWidth: '340px',
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
  '.gallery-modal-footer': {
    marginLeft: 0,
    marginRight: 'auto',
  },
}))
